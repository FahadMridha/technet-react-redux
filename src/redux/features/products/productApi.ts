import { api } from "@/redux/api/apiSlice";

 const productApi = api.injectEndpoints({
    endpoints : (builder )=>({
        getProducts : builder.query({
        query : () => '/products'
        }),
        singleProductGet : builder.query({
        query : (id) => `/product/${id}`
        }),
        postComment : builder.mutation({
            query :({id ,data})=>({
                url :`/comment/${id}`,
                method :"POST",
                body : data,
            }), 
            invalidatesTags : ['comment']
        }),
        getComment : builder.query({
            query : (id) => `/comment/${id}`,
            providesTags : ["comment"]
            }),
    })
 })

 export const {useGetProductsQuery ,useSingleProductGetQuery , usePostCommentMutation ,useGetCommentQuery} = productApi