import { type StudyId } from "./study";
import { type UserId } from "./user";

export type UserStudyId = string;

export interface UserStudy {
  id: UserStudyId;
  userId: UserId;
  studyId: StudyId;
}
