import { type StudyId } from "./study";
import { type TranslationKey } from "./word";

export interface StudyWord {
  studyId: StudyId;
  wordId: TranslationKey;
  isCorrectlyAnswered: boolean;
  isMarkedForReview: boolean;
}
