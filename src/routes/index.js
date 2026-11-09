import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import AuthRoutes from "./auth.routes";

function Routes() {
    const loading = false;
    const signed = false;

    return (
        signed ? <View></View> : <AuthRoutes></AuthRoutes>
    );
}

export default Routes;
