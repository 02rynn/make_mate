package com.example.makeMate.Entity;

import java.awt.Image;


import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import lombok.Data;


@Data
@Entity
public class UserImage{
    
    private Long id;

    @Embedded
    private Image image;
    


}