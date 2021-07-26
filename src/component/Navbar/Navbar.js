import React from 'react'
import {Heading,Container,Seachbar,Input,CustomBsSearch} from '../../style/Navbar'
import {CustomDiv} from '../../style/shared' 

export const Navbar = (props) => {
    return (
        <Container>
            <Heading>
               {props.Heading ?props.Heading: "Patient Chart"}
            </Heading>
            <Seachbar>
                <CustomBsSearch size="25"/>
                <Input placeholder="search"/>
            </Seachbar>
            <CustomDiv marginT="18px" marginL="5px" marginR="15px" fontWeight="500" color="grey">
            Provider: TOM COLLINS
            </CustomDiv>
        </Container>
    )
}
