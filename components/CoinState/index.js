import React, { useEffect, useState } from 'react';
import ChainChart from './ChainChart';
import TvlChart from './TvlChart';
import { Spinner, Table } from 'react-bootstrap';
import SupplyChart from './SupplyChart';
import Image from 'next/image';
import ButtonWithTooltip from './ButtonWithTooltip';
import Link from 'next/link';
import SimpleBarReact from "simplebar-react";
import axios from 'axios';
import { ACTION_ROUTES } from '../../constants/constant';
import { toast } from 'react-toastify';


export default function CoinState() {
    const [activeFilter, setActiveFilter] = useState('');
    const [ActiveMenu, setActiveMenu] = useState('1hr');
    const [activeCoin, setActiveCoin] = useState('BTC');
    const [coinState, setcoinState] = useState([]); // Added loading state
    const [loader, setloader] = useState(false); // Added loading state

    // Add an effect to remove the active filter class after a short delay
    useEffect(() => {
        if (activeFilter) {
            const timeoutId = setTimeout(() => {
                setActiveFilter('');
            }, 100); // Adjust the delay as needed
            return () => clearTimeout(timeoutId);
        }
    }, [activeFilter]);

    const tableData = [
        {
            cryptos: 'BONE',
            topgainers: '20.2%',
            cryptos1: 'BONE',
            toplosers: '23.2%',
        },
        {
            cryptos: 'BONE',
            topgainers: '20.2%',
            cryptos1: 'BONE',
            toplosers: '23.2%',
        },
        {
            cryptos: 'BONE',
            topgainers: '20.2%',
            cryptos1: 'BONE',
            toplosers: '23.2%',
        },
        {
            cryptos: 'BONE',
            topgainers: '20.2%',
            cryptos1: 'BONE',
            toplosers: '23.2%',
        },
        {
            cryptos: 'BONE',
            topgainers: '20.2%',
            cryptos1: 'BONE',
            toplosers: '23.2%',
        },
    ];
    const MarketLeadBoard = [
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'Usdicon',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'Usdicon',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'Usdicon',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'Usdicon',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'Usdicon',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'Usdicon',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },
        {
            coin: 'Bitcoin',
            ShortName: 'BT',
            image: '/img/icons/wrappedbiticon.png',
            price: '86513.2%',
            currency: 'USD',
        },
        {
            coin: 'Teather',
            ShortName: 'TEH',
            image: '/img/icons/Tether.png',
            price: '323.2%',
            currency: 'USD',
        },
        {
            coin: 'Binance',
            ShortName: 'BI',
            image: '/img/icons/binance.png',
            price: '941.2%',
            currency: 'USD',
        },
        {
            coin: 'ChainLink',
            ShortName: 'CH',
            image: '/img/icons/chainlink.png',
            price: '62.2%',
            currency: 'USD',
        },
        {
            coin: 'Okb',
            ShortName: 'TEH',
            image: '/img/icons/Usdicon.png',
            price: '63.2%',
            currency: 'USD',
        },
        {
            coin: 'Polygon',
            ShortName: 'METIC',
            image: '/img/icons/polygon.png',
            price: '85.2%',
            currency: 'USD',
        },
        {
            coin: 'Shiba',
            ShortName: 'SH',
            image: '/img/icons/Shiba.png',
            price: '785.2%',
            currency: 'USD',
        },
        {
            coin: 'Uniswap',
            ShortName: 'UNI',
            image: '/img/icons/uniswap.png',
            price: '757.2%',
            currency: 'USD',
        },
        {
            coin: 'USDICON',
            ShortName: 'USD',
            image: '/img/icons/Usdicon.png',
            price: '345.2%',
            currency: 'USD',
        },

    ];

    const GetLeaderBoard = async () => {
        console.log('called');
        setloader(true);
        try {
            const response = await axios.get(ACTION_ROUTES.LeaderboardAPI);
            setcoinState(response.data)
            setloader(false)
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    // Handle forbidden error
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        // You can set individual error messages for each field here
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
                        }
                        // Handle other error codes if needed
                    });
                } else {
                    // Handle other errors
                    console.error('Something Went Wrong:', error);
                    toast.error('Please try again later.');
                }
            } else {
                console.error('Something Went Wrong:', error);
                toast.error('Please try again later.');
            }
            setloader(false)
        }
    };
    useEffect(() => {
        GetLeaderBoard(); // Initial call on component mount

        const intervalId = setInterval(() => {
            GetLeaderBoard(); // Call every 10 seconds
        }, 10000);

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []); // Empty dependency array means it will run once on mount


    console.log('coinState',coinState);
    return (
        <>
            <section className="seller__area">
                <div className="container">
                    <div className='row'>
                        <div className="col-12">
                            <div className='sec_heading'>
                                <h4>ChainStats</h4>
                                <p>Defi, Hot Pairs and MarketCaps</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12">
                            <div className="seller__item h-auto h-50 p-3 p-md-4  position-relative mb-0">
                                <div className='frame-filter-box mb-3'>
                                    <div className='row'>
                                        <div className='col-md-7'>
                                            <div className='d-flex w-75'>
                                                <span className='me-4 lh-lg'>Time Frame</span>
                                                <ul className="filter-without-style large-space align-items-center">
                                                    <li className={ActiveMenu === '1hr' && 'active'} onClick={() => {
                                                        setActiveFilter('1hr');
                                                        setActiveMenu('1hr');
                                                    }}>1hr</li>
                                                    <li className={ActiveMenu === '1D' && 'active'} onClick={() => { setActiveFilter('1D'); setActiveMenu('1D'); }}>1D</li>
                                                    <li className={ActiveMenu === '1M' && 'active'} onClick={() => { setActiveFilter('1M'); setActiveMenu('1M'); }}>1M</li>
                                                    <li className={ActiveMenu === '6M' && 'active'} onClick={() => { setActiveFilter('6M'); setActiveMenu('6M'); }}>6M</li>
                                                    <li className={ActiveMenu === 'YTD' && 'active'} onClick={() => { setActiveFilter('YTD'); setActiveMenu('YTD'); }}>YTD</li>
                                                    <li className={ActiveMenu === 'Max' && 'active'} onClick={() => { setActiveFilter('Max'); setActiveMenu('Max'); }}>Max</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className='d-flex justify-content-end align-items-center'>
                                                <span className='me-5'>Currency</span>
                                                <ul className="coin-style">
                                                    <li className={activeCoin === 'BTC' && 'active'} onClick={() => setActiveCoin('BTC')}>BTC</li>
                                                    <li className={activeCoin === 'USD' && 'active'} onClick={() => setActiveCoin('USD')}>USD</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row bottom-area ${activeFilter === '' ? '' : 'blink'}`}>
                        <div className="col-xl-6 col-lg-6">
                            <div className="seller__item h-auto p-4 h-50 position-relative">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className="heading"><h3 className='mb-0'>Hot Pairs</h3></div>
                                    <Link href='#' className='text-white'>See All</Link>
                                </div>

                                <div className="table-responsive">
                                    <Table className='table-borderless bg-transparent borderless-table cryptos_table'>
                                        <thead>
                                            <tr>
                                                <th className="noborder bg-transparent">Cryptos</th>
                                                <th className="noborder bg-transparent">Top Gainers</th>
                                                <th className="noborder bg-transparent">Cryptos</th>
                                                <th className="noborder bg-transparent">Top Losers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((rowData, index) => (
                                                <tr key={'rowdata'+index}>
                                                    <td className='bg-transparent'><span className='Coinbox'></span><span>WETH/</span> {rowData.cryptos}</td>
                                                    <td className='bg-transparent top_gainers'><i className="fa fa-long-arrow-right me-1"></i>{rowData.topgainers}</td>
                                                    <td className='bg-transparent'><span className='Coinbox'></span><span>WETH/</span> {rowData.cryptos1}</td>
                                                    <td className='bg-transparent top_losers'><i className="fa fa-long-arrow-right me-1"></i>{rowData.toplosers}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="seller__item h-auto h-50 p-3 p-md-4  position-relative">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <TvlChart />
                                    </div>
                                    <div className='col-md-6'>
                                        <ChainChart />
                                    </div>
                                </div>
                            </div>
                            <div className="seller__item h-auto h-50 p-3 p-md-4 position-relative">
                                <div>
                                    <SupplyChart />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="seller__item h-auto p-4 pe-0 market-cap-leaderboard-table">
                                <div className="heading"><h3 className='mb-0'>Market Cap Leaderboard</h3></div>
                                <SimpleBarReact style={{ maxHeight: 1365 }}>
                                    <div className='pe-4'>
                                        <Table className='table-borderless bg-transparent borderless-table market_table'>
                                            <thead>
                                                <tr>
                                                    <th className="noborder bg-transparent" align='left'></th>
                                                    <th className="noborder bg-transparent text-end p-0" align='right'></th>
                                                    <th className="noborder bg-transparent text-end" align='right'>Time Frame  7W</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {coinState && coinState.map((rowData, index) => (
                                                    <>
                                                        <tr key={'market' + index}>
                                                            <td className='bg-transparent'><span className='d-flex align-items-center'><span className='image-box-tb me-3'><Image src={rowData.logo_url} className='hoverable-image rounded-circle fill-fullimage' width={'100%'} height={'100%'} alt='' /></span> {rowData.name}<span className='ms-2'>{rowData.symbol}</span></span></td>
                                                            <td className='bg-transparent text-end'><ButtonWithTooltip tooltipclassName="leader-bg-color" tooltipText="Add to Watchlist" placement="left" className={'tooltip-plus-btn'}><i className='fa fa-plus'></i></ButtonWithTooltip></td>
                                                            <td className='bg-transparent text-end' style={{ width: '150px' }}>{rowData.price_change_percent_7d}<span className='ms-1'>USD</span></td>
                                                        </tr>
                                                    </>
                                                ))}
                                            </tbody>
                                        </Table>
                                        {loader && <div className='d-flex justify-content-center my-5 py-5'> <Spinner animation="border" role="status" /></div>}
                                    </div>
                                </SimpleBarReact>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
