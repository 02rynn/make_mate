package com.example.makeMate.DTO.response;

public class UpdateBbsResponse {

    private Integer updatedRecordCount;

    public UpdateBbsResponse(Integer updatedRecordCount) {
        this.updatedRecordCount = updatedRecordCount;
    }

    public Integer getUpdatedRecordCount() {
        return updatedRecordCount;
    }

    public void setUpdatedRecordCount(Integer updatedRecordCount) {
        this.updatedRecordCount = updatedRecordCount;
    }
}
