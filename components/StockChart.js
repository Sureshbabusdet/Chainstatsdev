import React, { useEffect, useRef, useState } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget({ symbol }) {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);
  }, []);

  useEffect(() => {
    if (symbol) {
      updateChartSymbol(symbol);
    }
  }, [symbol]);

  function createWidget() {
    if (document.getElementById('tradingview_b9cde') && 'TradingView' in window) {
      new window.TradingView.widget({
        autosize: true,
        symbol: "BITSTAMP:BTCUSD", // Default symbol
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: true,
        withdateranges: true,
        range: "1H",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        hide_volume: true,
        container_id: "tradingview_b9cde",
      });
    }
  }

  function updateChartSymbol(newSymbol) {
    if ('TradingView' in window) {
      const widget = new window.TradingView.widget(
        Object.assign(
          {
            symbol: newSymbol,
          },
          // Include other options you want to keep consistent
          {
            autosize: true,
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: true,
            withdateranges: true,
            range: "1H",
            hide_side_toolbar: false,
            allow_symbol_change: true,
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            hide_volume: true,
            container_id: "tradingview_b9cde",
          }
        )
      );
    }
  }

  return (
    <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
      <div id='tradingview_b9cde' style={{ height: "calc(100%)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        {/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a> */}
      </div>
    </div>
  );
}
