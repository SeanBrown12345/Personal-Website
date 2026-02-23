import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

type BitcoinVolatilityData = {
  last_week: { date: string; vol: number }[];
  forecast: { date: string; vol: number }[];
  as_of_date: string;
};

export default function BitcoinVolatility() {
  const [data, setData] = useState<BitcoinVolatilityData | null>(null);

  useEffect(() => {
    fetch(
      "https://seanbrown12345.github.io/Bitcoin-Volatility/public/bitcoin_vol_forecast.json",
      { cache: "no-store" }
    )
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  const lastUpdated = data.as_of_date;

  const realizedX = data.last_week.map(d => d.date);
  const realizedY = data.last_week.map(d => d.vol);

  const forecastX = data.forecast.map(d => d.date);
  const forecastY = data.forecast.map(d => d.vol);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "24px 20px" : "60px 120px",
        backgroundColor: "#0b1220",
        color: "#e5e7eb",
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto",
        height: "100%",
        overflowY: "auto",
        paddingBottom: "40px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: "16px"
        }}
      >
        <h1
          style={{
            fontWeight: 600,
            fontSize: isMobile ? "22px" : "28px",
            margin: 0
          }}
        >
          Machine Learning-Based Bitcoin Volatility Forecasting
        </h1>

        <a
          href="https://github.com/seanbrown12345/Bitcoin-Volatility"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "#f97316",
            fontWeight: 500
          }}
        >
          <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
            2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
            2.2.82a7.66 7.66 0 012.01-.27c.68 0 1.36.09 2.01.27
            1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
            2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
            3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
            2.19 0 .21.15.46.55.38A8.01 8.01 0 0016
            8c0-4.42-3.58-8-8-8z"/>
          </svg>
          View Analysis
        </a>
      </div>

      

      <div
        style={{
          backgroundColor: "#0f172a",
          borderRadius: "16px",
          padding: isMobile ? "16px" : "24px",
          marginTop: "24px"
        }}
      >
        <Plot
          data={[
            {
              x: realizedX,
              y: realizedY,
              type: "scatter",
              mode: "lines+markers",
              name: "Realized",
              line: { width: 3 }
            },
            {
              x: forecastX,
              y: forecastY,
              type: "scatter",
              mode: "lines",
              name: "Forecast",
              line: { dash: "dash", width: 3 }
            }
          ]}
          layout={{
            hovermode: "x unified",
            paper_bgcolor: "#0f172a",
            plot_bgcolor: "#0f172a",
            font: { color: "#f97316" },
            margin: { l: 40, r: 20, t: 40, b: 40 },
            title: {
                text: "Bitcoin 5-Day Volatility Forecast",
                x: 0.02,
                xanchor: "left",
                font: {
                    size: isMobile ? 16 : 22,
                    color: "#f97316",
                    family: "Inter, system-ui, -apple-system, Segoe UI, Roboto",
                    weight: 600
                }
                }
          }}
          config={{ displayModeBar: false, responsive: true }}
          style={{ width: "100%", height: isMobile ? "320px" : "420px" }}
        />
      </div>
      <p style={{ color: "#9ca3af", marginTop: "8px" }}>
        Updated {lastUpdated}
      </p>

      <section
        style={{
          maxWidth: "800px",
          lineHeight: 1.6
        }}
      >
        <h2>What is Volatility?</h2>
        <p style={{ color: "#9ca3af" }}>
         Volatility in finance measures the rate and severity of price fluctuations. High volatility indicates large price swings, while low volatility suggests more stable prices. 
        </p>

        <h2>About This Project</h2>
        <p style={{ color: "#9ca3af" }}>
          This project forecasts 5-day forward realized volatility of Bitcoin using
          machine learning techniques. Volatility forecasting is critical for risk
          management, derivatives pricing, and portfolio allocation decisions.
        </p>

        <p style={{ color: "#9ca3af" }}>
        Forecasts are generated automatically each day using a trained XGBoost regression model and updated market data.
        </p>

        <p style={{ color: "#9ca3af" }}>
          Multiple models were evaluated including naive persistence, GARCH(1,1),
          HAR, and XGBoost. XGBoost achieved statistically significant improvement
          over classical baselines (Diebold–Mariano test, p &lt; 0.05).
        </p>

        <h3 style={{ marginTop: "24px" }}>Model Performance</h3>

        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              <tr><td style={{ padding: "8px 0" }}>Baseline</td><td>0.0167</td></tr>
              <tr><td style={{ padding: "8px 0" }}>GARCH</td><td>0.0146</td></tr>
              <tr><td style={{ padding: "8px 0" }}>HAR</td><td>0.0135</td></tr>
              <tr><td style={{ padding: "8px 0", color: "#f97316" }}>XGBoost</td><td style={{ color: "#f97316" }}>0.0127</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{ }}>Interpretation</h3> 
        <p style={{ color: "#9ca3af", paddingBottom: "20px" }}>
             Higher predicted volatility implies increased short-term risk and uncertainty in the Bitcoin market. 
             Forecasts are experimental and intended for research purposes only. 
        </p> 
      </section>
    </div>
  );
}