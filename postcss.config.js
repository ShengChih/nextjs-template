const excludeCssAttributes = [
  '*',
  '!min-width',
  '!min-height',
  '!font-size',
  '!filter',
  '!border-radius',
  '!column-gap',
  '!row-gap',
]

module.exports = {
  plugins: [
    "postcss-nested",
    "postcss-mixins",
    "postcss-simple-vars",
    "postcss-nested",
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    /** 只針對滿版的 style 要轉 viewport, 其他透過 tailwindcss pixel 指定即可 */
    [
      '@our-patches/postcss-px-to-viewport',
      {
        unitToConvert: 'px', // 要轉化的單位
        viewportWidth: 360, // UI設計稿的寬度
        unitPrecision: 64, // 轉換後的精度，即小數點位數
        propList: excludeCssAttributes, // 指定轉換的css屬性的單位，*代表全部css屬性的單位都進行轉換
        viewportUnit: 'vw', // 指定需要轉換成的視窗單位，默認vw
        fontViewportUnit: 'vw', // 指定字體需要轉換成的視窗單位，默認vw
        selectorBlackList: ['wrap'], // 指定不轉換為視窗單位的類名，
        minPixelValue: 1, // 默認值1，小於或等於4px則不進行轉換
        mediaQuery: true, // 是否在媒體查詢的css代碼中也進行轉換，默認false
        replace: true, // 是否轉換後直接更換屬性值
        include: [/\/fullpage\/mobile(\.module)?\.scss/], // 只包含允許的文件
        landscape: false, // 是否處理橫屏情況
      }
    ],
    [
      '@our-patches/postcss-px-to-viewport',
      {
        unitToConvert: 'px', // 要轉化的單位
        viewportWidth: 1280, // UI設計稿的寬度
        unitPrecision: 64, // 轉換後的精度，即小數點位數
        propList: excludeCssAttributes, // 指定轉換的css屬性的單位，*代表全部css屬性的單位都進行轉換
        viewportUnit: 'vw', // 指定需要轉換成的視窗單位，默認vw
        fontViewportUnit: 'vw', // 指定字體需要轉換成的視窗單位，默認vw
        selectorBlackList: ['wrap'], // 指定不轉換為視窗單位的類名，
        minPixelValue: 1, // 默認值1，小於或等於4px則不進行轉換
        mediaQuery: true, // 是否在媒體查詢的css代碼中也進行轉換，默認false
        replace: true, // 是否轉換後直接更換屬性值
        include: [/\/fullpage\/pc(\.module)?\.scss/], // 只包含允許的文件
        landscape: false, // 是否處理橫屏情況
      }
    ],
    [
      '@our-patches/postcss-px-to-viewport',
      {
        unitToConvert: 'px', // 要轉化的單位
        viewportWidth: 768, // UI設計稿的寬度
        unitPrecision: 64, // 轉換後的精度，即小數點位數
        propList: excludeCssAttributes, // 指定轉換的css屬性的單位，*代表全部css屬性的單位都進行轉換
        viewportUnit: 'vw', // 指定需要轉換成的視窗單位，默認vw
        fontViewportUnit: 'vw', // 指定字體需要轉換成的視窗單位，默認vw
        selectorBlackList: ['wrap'], // 指定不轉換為視窗單位的類名，
        minPixelValue: 1, // 默認值1，小於或等於4px則不進行轉換
        mediaQuery: true, // 是否在媒體查詢的css代碼中也進行轉換，默認false
        replace: true, // 是否轉換後直接更換屬性值
        include: [/\/fullpage\/tablet(\.module)?\.scss/], // 只包含允許的文件
        landscape: false, // 是否處理橫屏情況
      }
    ],
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => {
          return content.match(/[\w-/:]+(?<!:)/g) || []
        },
        safelist: ["html", "body"],
      },
    ],
  ]
}
