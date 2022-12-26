import React, { useState } from "react";


function ProfileImgContainer () {
        //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState("");

    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
        const formData = new FormData()
        formData.append('files',fileImage)
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        
        setFileImage("");
    };
    
    

    return(
        <div>
                <h6 style={{margin: '20px 0px'}}>이미지 미리보기</h6>
        <table>
            <tbody>
            <tr>
                <th></th>
                <td>
                <div>
                    {fileImage && (
                    <img 
                        alt="sample"
                        src={fileImage}
                        style={{ margin: "auto" }}
                    />
                    )}
                    <div
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <input
                        id="profile"
                        name="imgUpload"
                        type="file"
                        accept="image/*"
                        onChange={saveFileImage}
                    />

                    <button
                        style={{
                        backgroundColor: "gray",
                        color: "white",
                        width: "55px",
                        height: "30px",
                        cursor: "pointer",
                        borderRadius:'10px',
                        }}
                        onClick={() => deleteFileImage()}
                    >
                        삭제
                    </button>
                    </div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
            
        </div>     
    )
    
}

export default ProfileImgContainer;