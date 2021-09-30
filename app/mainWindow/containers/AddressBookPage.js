// Copyright (C) 2021 Zent Cash Foundation
//
// Please see the included LICENSE file for more information.
import React, { Component } from "react";
import AddressBook from "../components/AddressBook";

type Props = {};

export default class AddressBookPage extends Component<Props> {
    props: Props;

    render() {
        return <AddressBook />;
    }
}
