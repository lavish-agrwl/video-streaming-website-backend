// export const asyncHandler = (func) => {
//     async (req, res, next) => {
//         try {
//             await(fn)
//         } catch (error) {
//             req.status(error.code || 500).json({
//                 success: false,
//                 message: error.message,
//             })
//         }
//     };
// };

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    };
};

export default asyncHandler;
