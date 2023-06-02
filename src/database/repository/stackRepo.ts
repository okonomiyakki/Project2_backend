import db from '../../config/dbconfig';
import { AppError } from '../../utils/errorHandler';

/* 전체 기술 스택 리스트 조회 */
export const findAllStacks = async (): Promise<any[]> => {
  try {
    const selectColumn = `
    stack_name
    `;

    const SQL = `
    SELECT ${selectColumn}
    FROM stack
    `;

    const [stacks]: any = await db.query(SQL);

    return stacks;
  } catch (error) {
    console.log(error);
    throw new AppError(500, '[ DB 에러 ] 전체 기술 스택 리스트 조회 실패');
  }
};
