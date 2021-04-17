import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { getDesk } from "../../../redux/actions/desk";
import Spinner from "../../layout/Spinner";
import { useDispatch, useSelector } from "react-redux";
import DeskCard from "./deskCard";

const Desks = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDesk());
    }, []);
    const desks = useSelector((state) => state.desk.desks);
    console.log(desks);
    return desks === null ? (
        <Spinner />
    ) : (
        <div>
            <Container>
                <Grid container spacing={2} justify="center">
                    {desks.map((desk) => (
                        <DeskCard name={desk.deskID} inUse={desk.inUse}/>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Desks;
