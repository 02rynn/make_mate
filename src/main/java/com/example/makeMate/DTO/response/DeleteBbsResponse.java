package com.example.makeMate.DTO.response;

public class DeleteBbsResponse {

    private Integer deletedRecordCount;

    public DeleteBbsResponse(Integer deletedRecordCount) {
        this.deletedRecordCount = deletedRecordCount;
    }

    public Integer getDeletedRecordCount() {
        return deletedRecordCount;
    }

    public void setDeletedRecordCount(Integer deletedRecordCount) {
        this.deletedRecordCount = deletedRecordCount;
    }
}
