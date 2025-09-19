{
  "project": "Amazon Seller Profitability Calculator (India)",
  "objective": "Build a modern, responsive, and visually engaging calculator that outperforms both the official Amazon calculator and competitor calculators. It should provide sellers with an accurate net profit estimate after all Amazon fees (referral, closing, shipping, GST, etc.) with proper visualizations strictly following the attached "calc-logic.md" file .",
  "references": {
    "amazon_official_calculator": "amazon-official-seller-calculator.png",
    "competitor_calculators": ["amazon-official-seller-calculator.png","competitor-calc.png],
    "amazon_fee_logic": "calc-logic.md"
  },
  "inputs": [
    "Category & Subcategory (dropdown → auto-load referral fee % from fee logic)",
    "Selling Price (₹)",
    "Cost Price (₹)",
    "Package Weight (grams/kg)",
    "Package Dimensions (cm)",
    "Fulfillment Method (FBA, Easy Ship, Self-Ship, Seller Flex)",
    "Shipping Area (Local, Regional, National)",
    "STEP Level (Basic, Standard, Advanced, Premium)",
    "GST % (default 18%, editable)",
    "Additional Costs (optional: packaging, marketing, storage, etc.)"
  ],
  "calculations": {
    "referral_fee": "Selling Price × Referral Fee % based on category/subcategory",
    "closing_fee": "Based on product price range and fulfillment channel",
    "shipping_fee": "Volumetric weight = (L × B × H)/5000 vs actual weight → apply larger. Use region + STEP fee slabs.",
    "other_fees": "Pick & Pack, Storage, Removal, Miscellaneous where applicable",
    "gst": "Apply GST % (default 18%) on Amazon fees",
    "profit_formula": "Profit = Selling Price - Cost Price - (Referral + Closing + Shipping + Other Fees + GST)"
  },
  "outputs": [
    "Referral Fee",
    "Closing Fee",
    "Shipping Fee",
    "Other Fees",
    "GST",
    "Total Amazon Fees",
    "Total Cost",
    "Net Profit (₹)",
    "Profit Margin %"
  ],
  "visualizations": {
    "pie_chart": "Breakdown of fees vs profit",
    "bar_graph": "Compare profit margins under different scenarios (price, fulfillment, shipping regions)",
    "line_chart": "Optional: show profit trend as selling price changes",
    "scenario_simulation": "Allow sellers to adjust inputs (price, weight, method) and instantly see updated results"
  },
  "ui_ux": {
    "design": "Clean, modern, responsive, visually stronger than official Amazon calculator",
    "highlight": "Display Net Profit in large bold font with margin %",
    "cards": "Use cards for fee breakdown sections",
    "comparison_mode": "Allow comparing up to 3 products/fulfillment options side by side (like Amazon official, but clearer)",
    "tooltips": "Hover info to explain each fee type",
    "dark_mode": true,
    "error_handling": "Friendly validation for missing or invalid inputs"
  }
  "example_flow": {
    "category": "Apparel → Men’s T-Shirts",
    "inputs": {
      "price": 699,
      "cost": 300,
      "weight": "600g",
      "dimensions": "30×20×4 cm",
      "fulfillment": "FBA",
      "region": "Local",
      "step_level": "Basic"
    },
    "calculation": {
      "referral_fee": 118.83,
      "closing_fee": 26,
      "shipping_fee": 58,
      "gst": 39,
      "total_fees": 241,
      "profit": 158,
      "margin_percent": 22.6
    }
  },
  "deliverables": [
    "Functional, accurate profitability calculator",
    "Responsive UI with breakdown + charts",
    "Comparison view (like official Amazon calc, but improved)",
    "Embeddable component for websites"
  ],
  "task_for_dev": "Using the Amazon FBA India fee logic, build a modern, user-friendly profitability calculator with interactive charts and fee breakdowns. The design must be cleaner and more intuitive than both the Amazon official calculator and competitor tools."
}
