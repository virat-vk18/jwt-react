import { api } from "../app/service/api"
const token = localStorage.getItem('token')
const registerApi = api.injectEndpoints({
    endpoints: builder => ({
        getRegister: builder.query({
            query: () => ({ url: `register` }
            ),
            providesTags: ['Todos']
        }),
        createRegister: builder.mutation({
            query: (data) => ({
                url: 'register',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Todos']
        }),
        getSingleUser: builder.mutation({
            query: (body) => ({
                headers: {
                    authorization: `Bearer ${token}`
                },
                url: "/register/editUser",
                method: 'POST',
                body
            }),
            invalidatesTags: ['Todos']
        }),
        editRegister: builder.mutation({
            query: ({ id, ...body }) => ({
                headers: {
                    authorization: `Bearer ${token}`
                },
                url: `/register/update/${id}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Todos']
        }),
        deleteRegister: builder.mutation({
            query: (body) => ({
                url: '/register/delete',
                method: 'DELETE',
                body
            }),
            invalidatesTags: ['Todos']
        })
    })
})

export const { useGetRegisterQuery, useCreateRegisterMutation, useGetSingleUserMutation, useEditRegisterMutation, useDeleteRegisterMutation } = registerApi