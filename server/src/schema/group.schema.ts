import { object, number, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *   CreateGroupInput:
 *    type: object
 *    required:
 *      - name
 *    properties:
 *      name:
 *        type: string
 *        default: "Group A"
 *      surveyId:
 *        type: id
 */
const payload = {
  body: object({
    name: string({
      required_error: "name is required",
    }).min(1, "Lastname should be at least 2 characters long"),
    surveyId:string({
       required_error: "surveyId",
    })
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "name is required",
    }),
  }),
};

export const createGroupSchema = object({
  ...payload,
});



export const getGroupSchema = object({
  ...params,
});


export type CreateGroupInput = TypeOf<typeof createGroupSchema>;
export type ReadGrouptInput = TypeOf<typeof getGroupSchema>;
