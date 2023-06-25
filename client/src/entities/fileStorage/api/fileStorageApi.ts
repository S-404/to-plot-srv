import {baseApi, FILE_STORAGE_TAG} from "@shared/api";

import {
    CreateFileStorageItemQuery,
    CreateFileStorageItemResult, DeleteFileStorageItemQuery, DeleteFileStorageItemsQuery,
    GetAllContentResult, GetFileStorageItemQuery, GetFileStorageItemResult, GetRootContentResult,
    GetStorageResult, UpdateFileStorageItemQuery, UpdateFileStorageItemResult
} from "./types";


export const fileStorageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getStorage: build.query<GetStorageResult, null>({
            query: () => ({
                url: "api/file-storage/storage"
            }),
            providesTags: [FILE_STORAGE_TAG],
        }),
        getAllContent: build.query<GetAllContentResult, null>({
            query: () => ({
                url: "api/file-storage/all-content"
            }),
            providesTags: [FILE_STORAGE_TAG],
        }),
        getRootContent: build.query<GetRootContentResult, null>({
            query: () => ({
                url: "api/file-storage/root-content"
            }),
            providesTags: [FILE_STORAGE_TAG],
        }),
        createFileStorageItem: build.mutation<CreateFileStorageItemResult, CreateFileStorageItemQuery>({
            query: (body) => ({
                url: "api/file-storage/item",
                method: "POST",
                body
            }),
            invalidatesTags: [FILE_STORAGE_TAG],
        }),
        getFileStorageItem: build.query<GetFileStorageItemResult, GetFileStorageItemQuery>({
            query: (id) => ({
                url: `api/file-storage/item/${id}`
            }),
            providesTags: [FILE_STORAGE_TAG],
        }),
        updateFileStorageItem: build.mutation<UpdateFileStorageItemResult, UpdateFileStorageItemQuery>({
            query: ({body, id}) => ({
                url: `api/file-storage/item/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: [FILE_STORAGE_TAG],
        }),
        deleteFileStorageItem: build.mutation<null, DeleteFileStorageItemQuery>({
            query: (id) => ({
                url: `api/file-storage/item/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [FILE_STORAGE_TAG],
        }),
        deleteFileStorageItems: build.mutation<null, DeleteFileStorageItemsQuery>({
            query: (ids) => ({
                url: "api/file-storage/items",
                method: "DELETE",
                body: {
                    ids
                }
            }),
            invalidatesTags: [FILE_STORAGE_TAG],
        }),
    })
});

export const {
    useGetStorageQuery,
    useGetAllContentQuery,
    useCreateFileStorageItemMutation,
    useGetFileStorageItemQuery,
    useLazyGetFileStorageItemQuery,
    useUpdateFileStorageItemMutation,
    useDeleteFileStorageItemMutation,
    useDeleteFileStorageItemsMutation,
    useGetRootContentQuery,
} = fileStorageApi;