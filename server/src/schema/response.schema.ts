import { object, number, string, TypeOf, array } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *   CreateResponseInput:
 *    type: object
 *    required:
 *      - response
 *      - completionTime
 *      - surveyId
 *      - participantId
 *    properties:
 *      response:
 *        type: object
 *        required:
 *          - questionNumber
 *          - responseIndex
 *        properties:
 *          questionNumber:
 *            type: number
 *          responseIndex:
 *            type: number     
 *      completionTime:
 *        type: number
 *      surveyId:
 *        type: string
 *      participantId:
 *        type: string
 */
const payload = {
  body: object({
    response: array(object({
      questionNumber:number({required_error: "Question Number is required"}),
      responseIndex:number({required_error: "Response Index is required"})
    })
    ),
    completionTime:number({
      required_error: "completion time is required",
    }),
    surveyId: string({
      required_error: "surveyId is required",
    }),
    participantId: string({
      required_error: "participantId is required",
    }),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "id is required",
    }),
  }),
};

export const createResponseSchema = object({
  ...payload,
});

// export const updateProductSchema = object({
//   ...payload,
//   ...params,
// });

// export const deleteProductSchema = object({
//   ...params,
// });

export const getResponseSchema = object({
  ...params,
});


export type CreateResponseInput = TypeOf<typeof createResponseSchema>;
// export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadResponseInput = TypeOf<typeof getResponseSchema>;
// export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;