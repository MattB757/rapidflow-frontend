"use strict";
// export const searchFilter = (search: string) => {
//   if (!search) return {};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchFilter = void 0;
//   return {
//     OR: [
//       {
//         firstName: {
//           contains: search,
//           mode: "insensitive",
//         },
//       },
//       {
//         lastName: {
//           contains: search,
//           mode: "insensitive",
//         },
//       },
//       {
//         email: {
//           contains: search,
//           mode: "insensitive",
//         },
//       },
//       // {
//       //   orderId: {
//       //     contains: search,
//       //     mode: "insensitive",
//       //   },
//       // },
//     ],
//   };
// };
const searchFilter = (search) => {
    if (!search)
        return {};
    return {
        OR: [
            {
                userName: {
                    contains: search,
                    mode: "insensitive",
                },
                email: {
                    contains: search,
                    mode: "insensitive",
                },
            },
        ],
    };
};
exports.searchFilter = searchFilter;
