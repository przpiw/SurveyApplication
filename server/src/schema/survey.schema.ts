import { object, number, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *   schema:
 *     Survey:
 *       type: object
 *       required:
 *        - name 
 *        - category
 *        - resubmitAfter
 *       properties:
 *         name:
 *           type: string       
 *         category:
 *           type: string
 *         resubmitAfter:
 *           type: number
 */

const payload = {
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    category: string({
      required_error: "Category is required",
    }).min(2, "Category should be at least 2 characters long"),
    resubmitAfter: number({
      required_error: "Resubmit time is required",
    }),
  }),
};

const params = {
  params: object({
    productId: string({
      required_error: "surveyId is required",
    }),
  }),
};

export const createSurveySchema = object({
  ...payload,
});

export const updateSurveySchema = object({
  ...payload,
  ...params,
});

export const deleteSurveySchema = object({
  ...params,
});

export const getSurveySchema = object({
  ...params,
});

export type CreateSurveyInput = TypeOf<typeof createSurveySchema>;
export type UpdateSurveyInput = TypeOf<typeof updateSurveySchema>;
export type ReadSurveyInput = TypeOf<typeof getSurveySchema>;
export type DeleteSurveyInput = TypeOf<typeof deleteSurveySchema>;