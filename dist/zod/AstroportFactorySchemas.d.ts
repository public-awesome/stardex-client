import { z } from 'zod';
export declare const pairTypeSchema: z.ZodUnion<[z.ZodObject<{
    xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    xyk: {};
}, {
    xyk: {};
}>, z.ZodObject<{
    stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    stable: {};
}, {
    stable: {};
}>, z.ZodObject<{
    custom: z.ZodString;
}, "strip", z.ZodTypeAny, {
    custom: string;
}, {
    custom: string;
}>]>;
export declare const pairConfigSchema: z.ZodObject<{
    code_id: z.ZodNumber;
    is_disabled: z.ZodBoolean;
    is_generator_disabled: z.ZodBoolean;
    maker_fee_bps: z.ZodNumber;
    pair_type: z.ZodUnion<[z.ZodObject<{
        xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        xyk: {};
    }, {
        xyk: {};
    }>, z.ZodObject<{
        stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        stable: {};
    }, {
        stable: {};
    }>, z.ZodObject<{
        custom: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        custom: string;
    }, {
        custom: string;
    }>]>;
    total_fee_bps: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code_id: number;
    is_disabled: boolean;
    is_generator_disabled: boolean;
    maker_fee_bps: number;
    pair_type: {
        xyk: {};
    } | {
        stable: {};
    } | {
        custom: string;
    };
    total_fee_bps: number;
}, {
    code_id: number;
    is_disabled: boolean;
    is_generator_disabled: boolean;
    maker_fee_bps: number;
    pair_type: {
        xyk: {};
    } | {
        stable: {};
    } | {
        custom: string;
    };
    total_fee_bps: number;
}>;
export declare const binarySchema: z.ZodString;
export declare const addrSchema: z.ZodString;
export declare const migrateMsgSchema: z.ZodObject<{
    params: z.ZodString;
}, "strip", z.ZodTypeAny, {
    params: string;
}, {
    params: string;
}>;
export declare const arrayOfPairTypeSchema: z.ZodArray<z.ZodUnion<[z.ZodObject<{
    xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    xyk: {};
}, {
    xyk: {};
}>, z.ZodObject<{
    stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    stable: {};
}, {
    stable: {};
}>, z.ZodObject<{
    custom: z.ZodString;
}, "strip", z.ZodTypeAny, {
    custom: string;
}, {
    custom: string;
}>]>, "many">;
export declare const configResponseSchema: z.ZodObject<{
    coin_registry_address: z.ZodString;
    fee_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    generator_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    owner: z.ZodString;
    pair_configs: z.ZodArray<z.ZodObject<{
        code_id: z.ZodNumber;
        is_disabled: z.ZodBoolean;
        is_generator_disabled: z.ZodBoolean;
        maker_fee_bps: z.ZodNumber;
        pair_type: z.ZodUnion<[z.ZodObject<{
            xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            xyk: {};
        }, {
            xyk: {};
        }>, z.ZodObject<{
            stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            stable: {};
        }, {
            stable: {};
        }>, z.ZodObject<{
            custom: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom: string;
        }, {
            custom: string;
        }>]>;
        total_fee_bps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }, {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }>, "many">;
    token_code_id: z.ZodNumber;
    whitelist_code_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    coin_registry_address: string;
    pair_configs: {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }[];
    token_code_id: number;
    whitelist_code_id: number;
    fee_address?: string | null | undefined;
    generator_address?: string | null | undefined;
}, {
    owner: string;
    coin_registry_address: string;
    pair_configs: {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }[];
    token_code_id: number;
    whitelist_code_id: number;
    fee_address?: string | null | undefined;
    generator_address?: string | null | undefined;
}>;
export declare const feeInfoResponseSchema: z.ZodObject<{
    fee_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    maker_fee_bps: z.ZodNumber;
    total_fee_bps: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    maker_fee_bps: number;
    total_fee_bps: number;
    fee_address?: string | null | undefined;
}, {
    maker_fee_bps: number;
    total_fee_bps: number;
    fee_address?: string | null | undefined;
}>;
export declare const instantiateMsgSchema: z.ZodObject<{
    coin_registry_address: z.ZodString;
    fee_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    generator_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    owner: z.ZodString;
    pair_configs: z.ZodArray<z.ZodObject<{
        code_id: z.ZodNumber;
        is_disabled: z.ZodBoolean;
        is_generator_disabled: z.ZodBoolean;
        maker_fee_bps: z.ZodNumber;
        pair_type: z.ZodUnion<[z.ZodObject<{
            xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            xyk: {};
        }, {
            xyk: {};
        }>, z.ZodObject<{
            stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            stable: {};
        }, {
            stable: {};
        }>, z.ZodObject<{
            custom: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom: string;
        }, {
            custom: string;
        }>]>;
        total_fee_bps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }, {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }>, "many">;
    token_code_id: z.ZodNumber;
    whitelist_code_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    owner: string;
    coin_registry_address: string;
    pair_configs: {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }[];
    token_code_id: number;
    whitelist_code_id: number;
    fee_address?: string | null | undefined;
    generator_address?: string | null | undefined;
}, {
    owner: string;
    coin_registry_address: string;
    pair_configs: {
        code_id: number;
        is_disabled: boolean;
        is_generator_disabled: boolean;
        maker_fee_bps: number;
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        total_fee_bps: number;
    }[];
    token_code_id: number;
    whitelist_code_id: number;
    fee_address?: string | null | undefined;
    generator_address?: string | null | undefined;
}>;
export declare const assetInfoSchema: z.ZodUnion<[z.ZodObject<{
    token: z.ZodObject<{
        contract_addr: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        contract_addr: string;
    }, {
        contract_addr: string;
    }>;
}, "strip", z.ZodTypeAny, {
    token: {
        contract_addr: string;
    };
}, {
    token: {
        contract_addr: string;
    };
}>, z.ZodObject<{
    native_token: z.ZodObject<{
        denom: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        denom: string;
    }, {
        denom: string;
    }>;
}, "strip", z.ZodTypeAny, {
    native_token: {
        denom: string;
    };
}, {
    native_token: {
        denom: string;
    };
}>]>;
export declare const queryMsgSchema: z.ZodUnion<[z.ZodObject<{
    config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    config: {};
}, {
    config: {};
}>, z.ZodObject<{
    pair: z.ZodObject<{
        asset_infos: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            token: z.ZodObject<{
                contract_addr: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                contract_addr: string;
            }, {
                contract_addr: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            token: {
                contract_addr: string;
            };
        }, {
            token: {
                contract_addr: string;
            };
        }>, z.ZodObject<{
            native_token: z.ZodObject<{
                denom: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                denom: string;
            }, {
                denom: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            native_token: {
                denom: string;
            };
        }, {
            native_token: {
                denom: string;
            };
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    }, {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    }>;
}, "strip", z.ZodTypeAny, {
    pair: {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    };
}, {
    pair: {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    };
}>, z.ZodObject<{
    pairs: z.ZodObject<{
        limit: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        start_after: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            token: z.ZodObject<{
                contract_addr: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                contract_addr: string;
            }, {
                contract_addr: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            token: {
                contract_addr: string;
            };
        }, {
            token: {
                contract_addr: string;
            };
        }>, z.ZodObject<{
            native_token: z.ZodObject<{
                denom: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                denom: string;
            }, {
                denom: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            native_token: {
                denom: string;
            };
        }, {
            native_token: {
                denom: string;
            };
        }>]>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        limit?: number | null | undefined;
        start_after?: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[] | null | undefined;
    }, {
        limit?: number | null | undefined;
        start_after?: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[] | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    pairs: {
        limit?: number | null | undefined;
        start_after?: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[] | null | undefined;
    };
}, {
    pairs: {
        limit?: number | null | undefined;
        start_after?: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[] | null | undefined;
    };
}>, z.ZodObject<{
    fee_info: z.ZodObject<{
        pair_type: z.ZodUnion<[z.ZodObject<{
            xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            xyk: {};
        }, {
            xyk: {};
        }>, z.ZodObject<{
            stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            stable: {};
        }, {
            stable: {};
        }>, z.ZodObject<{
            custom: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom: string;
        }, {
            custom: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
    }, {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    fee_info: {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
    };
}, {
    fee_info: {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
    };
}>, z.ZodObject<{
    blacklisted_pair_types: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    blacklisted_pair_types: {};
}, {
    blacklisted_pair_types: {};
}>]>;
export declare const pairInfoSchema: z.ZodObject<{
    asset_infos: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        token: z.ZodObject<{
            contract_addr: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            contract_addr: string;
        }, {
            contract_addr: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        token: {
            contract_addr: string;
        };
    }, {
        token: {
            contract_addr: string;
        };
    }>, z.ZodObject<{
        native_token: z.ZodObject<{
            denom: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            denom: string;
        }, {
            denom: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        native_token: {
            denom: string;
        };
    }, {
        native_token: {
            denom: string;
        };
    }>]>, "many">;
    contract_addr: z.ZodString;
    liquidity_token: z.ZodString;
    pair_type: z.ZodUnion<[z.ZodObject<{
        xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        xyk: {};
    }, {
        xyk: {};
    }>, z.ZodObject<{
        stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        stable: {};
    }, {
        stable: {};
    }>, z.ZodObject<{
        custom: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        custom: string;
    }, {
        custom: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    pair_type: {
        xyk: {};
    } | {
        stable: {};
    } | {
        custom: string;
    };
    contract_addr: string;
    asset_infos: ({
        token: {
            contract_addr: string;
        };
    } | {
        native_token: {
            denom: string;
        };
    })[];
    liquidity_token: string;
}, {
    pair_type: {
        xyk: {};
    } | {
        stable: {};
    } | {
        custom: string;
    };
    contract_addr: string;
    asset_infos: ({
        token: {
            contract_addr: string;
        };
    } | {
        native_token: {
            denom: string;
        };
    })[];
    liquidity_token: string;
}>;
export declare const pairsResponseSchema: z.ZodObject<{
    pairs: z.ZodArray<z.ZodObject<{
        asset_infos: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            token: z.ZodObject<{
                contract_addr: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                contract_addr: string;
            }, {
                contract_addr: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            token: {
                contract_addr: string;
            };
        }, {
            token: {
                contract_addr: string;
            };
        }>, z.ZodObject<{
            native_token: z.ZodObject<{
                denom: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                denom: string;
            }, {
                denom: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            native_token: {
                denom: string;
            };
        }, {
            native_token: {
                denom: string;
            };
        }>]>, "many">;
        contract_addr: z.ZodString;
        liquidity_token: z.ZodString;
        pair_type: z.ZodUnion<[z.ZodObject<{
            xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            xyk: {};
        }, {
            xyk: {};
        }>, z.ZodObject<{
            stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            stable: {};
        }, {
            stable: {};
        }>, z.ZodObject<{
            custom: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom: string;
        }, {
            custom: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        contract_addr: string;
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        liquidity_token: string;
    }, {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        contract_addr: string;
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        liquidity_token: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    pairs: {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        contract_addr: string;
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        liquidity_token: string;
    }[];
}, {
    pairs: {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        contract_addr: string;
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        liquidity_token: string;
    }[];
}>;
export declare const executeMsgSchema: z.ZodUnion<[z.ZodObject<{
    update_config: z.ZodObject<{
        coin_registry_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        fee_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        generator_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        token_code_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        whitelist_code_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        coin_registry_address?: string | null | undefined;
        fee_address?: string | null | undefined;
        generator_address?: string | null | undefined;
        token_code_id?: number | null | undefined;
        whitelist_code_id?: number | null | undefined;
    }, {
        coin_registry_address?: string | null | undefined;
        fee_address?: string | null | undefined;
        generator_address?: string | null | undefined;
        token_code_id?: number | null | undefined;
        whitelist_code_id?: number | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    update_config: {
        coin_registry_address?: string | null | undefined;
        fee_address?: string | null | undefined;
        generator_address?: string | null | undefined;
        token_code_id?: number | null | undefined;
        whitelist_code_id?: number | null | undefined;
    };
}, {
    update_config: {
        coin_registry_address?: string | null | undefined;
        fee_address?: string | null | undefined;
        generator_address?: string | null | undefined;
        token_code_id?: number | null | undefined;
        whitelist_code_id?: number | null | undefined;
    };
}>, z.ZodObject<{
    update_pair_config: z.ZodObject<{
        config: z.ZodObject<{
            code_id: z.ZodNumber;
            is_disabled: z.ZodBoolean;
            is_generator_disabled: z.ZodBoolean;
            maker_fee_bps: z.ZodNumber;
            pair_type: z.ZodUnion<[z.ZodObject<{
                xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
            }, "strip", z.ZodTypeAny, {
                xyk: {};
            }, {
                xyk: {};
            }>, z.ZodObject<{
                stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
            }, "strip", z.ZodTypeAny, {
                stable: {};
            }, {
                stable: {};
            }>, z.ZodObject<{
                custom: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                custom: string;
            }, {
                custom: string;
            }>]>;
            total_fee_bps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            code_id: number;
            is_disabled: boolean;
            is_generator_disabled: boolean;
            maker_fee_bps: number;
            pair_type: {
                xyk: {};
            } | {
                stable: {};
            } | {
                custom: string;
            };
            total_fee_bps: number;
        }, {
            code_id: number;
            is_disabled: boolean;
            is_generator_disabled: boolean;
            maker_fee_bps: number;
            pair_type: {
                xyk: {};
            } | {
                stable: {};
            } | {
                custom: string;
            };
            total_fee_bps: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        config: {
            code_id: number;
            is_disabled: boolean;
            is_generator_disabled: boolean;
            maker_fee_bps: number;
            pair_type: {
                xyk: {};
            } | {
                stable: {};
            } | {
                custom: string;
            };
            total_fee_bps: number;
        };
    }, {
        config: {
            code_id: number;
            is_disabled: boolean;
            is_generator_disabled: boolean;
            maker_fee_bps: number;
            pair_type: {
                xyk: {};
            } | {
                stable: {};
            } | {
                custom: string;
            };
            total_fee_bps: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    update_pair_config: {
        config: {
            code_id: number;
            is_disabled: boolean;
            is_generator_disabled: boolean;
            maker_fee_bps: number;
            pair_type: {
                xyk: {};
            } | {
                stable: {};
            } | {
                custom: string;
            };
            total_fee_bps: number;
        };
    };
}, {
    update_pair_config: {
        config: {
            code_id: number;
            is_disabled: boolean;
            is_generator_disabled: boolean;
            maker_fee_bps: number;
            pair_type: {
                xyk: {};
            } | {
                stable: {};
            } | {
                custom: string;
            };
            total_fee_bps: number;
        };
    };
}>, z.ZodObject<{
    create_pair: z.ZodObject<{
        asset_infos: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            token: z.ZodObject<{
                contract_addr: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                contract_addr: string;
            }, {
                contract_addr: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            token: {
                contract_addr: string;
            };
        }, {
            token: {
                contract_addr: string;
            };
        }>, z.ZodObject<{
            native_token: z.ZodObject<{
                denom: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                denom: string;
            }, {
                denom: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            native_token: {
                denom: string;
            };
        }, {
            native_token: {
                denom: string;
            };
        }>]>, "many">;
        init_params: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        pair_type: z.ZodUnion<[z.ZodObject<{
            xyk: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            xyk: {};
        }, {
            xyk: {};
        }>, z.ZodObject<{
            stable: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            stable: {};
        }, {
            stable: {};
        }>, z.ZodObject<{
            custom: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            custom: string;
        }, {
            custom: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        init_params?: string | null | undefined;
    }, {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        init_params?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    create_pair: {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        init_params?: string | null | undefined;
    };
}, {
    create_pair: {
        pair_type: {
            xyk: {};
        } | {
            stable: {};
        } | {
            custom: string;
        };
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
        init_params?: string | null | undefined;
    };
}>, z.ZodObject<{
    deregister: z.ZodObject<{
        asset_infos: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            token: z.ZodObject<{
                contract_addr: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                contract_addr: string;
            }, {
                contract_addr: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            token: {
                contract_addr: string;
            };
        }, {
            token: {
                contract_addr: string;
            };
        }>, z.ZodObject<{
            native_token: z.ZodObject<{
                denom: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                denom: string;
            }, {
                denom: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            native_token: {
                denom: string;
            };
        }, {
            native_token: {
                denom: string;
            };
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    }, {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    }>;
}, "strip", z.ZodTypeAny, {
    deregister: {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    };
}, {
    deregister: {
        asset_infos: ({
            token: {
                contract_addr: string;
            };
        } | {
            native_token: {
                denom: string;
            };
        })[];
    };
}>, z.ZodObject<{
    propose_new_owner: z.ZodObject<{
        expires_in: z.ZodNumber;
        owner: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        owner: string;
        expires_in: number;
    }, {
        owner: string;
        expires_in: number;
    }>;
}, "strip", z.ZodTypeAny, {
    propose_new_owner: {
        owner: string;
        expires_in: number;
    };
}, {
    propose_new_owner: {
        owner: string;
        expires_in: number;
    };
}>, z.ZodObject<{
    drop_ownership_proposal: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    drop_ownership_proposal: {};
}, {
    drop_ownership_proposal: {};
}>, z.ZodObject<{
    claim_ownership: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    claim_ownership: {};
}, {
    claim_ownership: {};
}>]>;
