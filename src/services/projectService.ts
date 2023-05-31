import { AppError } from '../utils/errorHandler';
import { CreateProjectInput } from '../database/types/ProjectType';
import * as projectRepo from '../database/repository/projectRepo';

/* 모집글 등록 */
export const addProject = async (inputData: CreateProjectInput) => {
  try {
    const createdProjectId: number = await projectRepo.createProject(inputData);

    // 같은 아이디로 연속적인 게시글 등록 요청 에러 반환 추가하기

    return createdProjectId;
  } catch (error) {
    if (error instanceof AppError) {
      if (error.statusCode === 500) console.log(error);
      throw error;
    } else {
      console.log(error);
      throw new AppError(500, '[ 서버 에러 ] 모집글 등록 실패');
    }
  }
};

/* 모집 역할별 모집글 목록 조회 */
export const getProjectsByRole = async (project_role: string) => {
  try {
    const foundProjectsByRole = await projectRepo.findProjectByRole(project_role);

    // 게시글이 존재하는지 확인 후 없으면 에러 처리

    return foundProjectsByRole;
  } catch (error) {
    if (error instanceof AppError) {
      if (error.statusCode === 500) console.log(error);
      throw error;
    } else {
      console.log(error);
      throw new AppError(500, '[ 서버 에러 ] 모집 역할별 모집글 목록 실패');
    }
  }
};
