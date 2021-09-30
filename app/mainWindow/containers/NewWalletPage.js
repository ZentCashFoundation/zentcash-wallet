// Copyright (C) 2021 Zent Cash Foundation
//
// Please see the included LICENSE file for more information.
import React, { Component } from "react";
import NewWallet from "../components/NewWallet";

type Props = {};

export default class NewWalletPage extends Component<Props> {
    props: Props;

    render() {
        return <NewWallet />;
    }
}
