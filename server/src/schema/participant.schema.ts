import { object, number, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *   CreateParticipantInput:
 *    type: object
 *    required:
 *      - firstname
 *      - lastname
 *      - image
 *    properties:
 *      firstname:
 *        type: string
 *        default: john
 *      lastname:
 *        type: string
 *        default: doe
 *      imageURL:
 *        type: string
 *        default: https://via.placeholder.com/150
 *   CreateParticipantResponse:
 *    type: object
 *    properties:
 *      firstname:
 *        type: string
 *      lastname:
 *        type: string
 *      imageURL:
 *        type: string
 */
const payload = {
  body: object({
    firstname: string({
      required_error: "Firstname is required",
    }).min(2, "Lastname should be at least 2 characters long"),
    lastname: string({
      required_error: "Lastname is required",
    }).min(2, "Lastname should be at least 2 characters long"),
    imageURL: string({
      required_error: "imageURL is required",
    }),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "id is required",
    }),
  }),
  group_id_params: object({
    groupId: string({
      required_error: "groupId is required",
    }),
  }),
};

export const createParticipantSchema = object({
  ...payload,
});

// export const updateProductSchema = object({
//   ...payload,
//   ...params,
// });

// export const deleteProductSchema = object({
//   ...params,
// });

export const getParticipantSchema = object({
  ...params,
});


export type CreateParticipantInput = TypeOf<typeof createParticipantSchema>;
// export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type ReadParticipantInput = TypeOf<typeof getParticipantSchema>;
// export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;