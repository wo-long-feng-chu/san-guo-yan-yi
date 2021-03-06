module.exports = {
  title: '三国演义',
  description: '《三国演义》是中国文学史上第一部章回小说，是历史演义小说的开山之作，也是第一部文人长篇小说，中国古典四大名著之一。',
  evergreen: true,
  themeConfig: {
    nav: [
      {
        text: '语言',
        items: [
          { text: '简体中文', link: '/zh-CN/' },
        ]
      }
    ],
    sidebar: {
      '/zh-CN/': getzhcnSide()
    }
  }
}

function getzhcnSide() {
  return [
    {
      title: '三国演义',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
        'chapter6',
        'chapter7',
        'chapter8',
        'chapter9',
        'chapter10',
        'chapter11',
        'chapter12',
        'chapter13',
        'chapter14',
        'chapter15',
        'chapter16',
        'chapter17',
        'chapter18',
        'chapter19',
        'chapter20',
        'chapter21',
        'chapter22',
        'chapter23',
        'chapter24',
        'chapter25',
        'chapter26',
        'chapter27',
        'chapter28',
        'chapter29',
        'chapter30',
        'chapter31',
        'chapter32',
        'chapter33',
        'chapter34',
        'chapter35',
        'chapter36',
        'chapter37',
        'chapter38',
        'chapter39',
        'chapter40',
        'chapter41',
        'chapter42',
        'chapter43',
        'chapter44',
        'chapter45',
        'chapter46',
        'chapter47',
        'chapter48',
        'chapter49',
        'chapter50',
        'chapter51',
        'chapter52',
        'chapter53',
        'chapter54',
        'chapter55',
        'chapter56',
        'chapter57',
        'chapter58',
        'chapter59',
        'chapter60',
        'chapter61',
        'chapter62',
        'chapter63',
        'chapter64',
        'chapter65',
        'chapter66',
        'chapter67',
        'chapter68',
        'chapter69',
        'chapter70',
        'chapter71',
        'chapter72',
        'chapter73',
        'chapter74',
        'chapter75',
        'chapter76',
        'chapter77',
        'chapter78',
        'chapter79',
        'chapter80',
        'chapter81',
        'chapter82',
        'chapter83',
        'chapter84',
        'chapter85',
        'chapter86',
        'chapter87',
        'chapter88',
        'chapter89',
        'chapter90',
        'chapter91',
        'chapter92',
        'chapter93',
        'chapter94',
        'chapter95',
        'chapter96',
        'chapter97',
        'chapter98',
        'chapter99',
        'chapter100',
        'chapter101',
        'chapter102',
        'chapter103',
        'chapter104',
        'chapter105',
        'chapter106',
        'chapter107',
        'chapter108',
        'chapter109',
        'chapter110',
        'chapter111',
        'chapter112',
        'chapter113',
        'chapter114',
        'chapter115',
        'chapter116',
        'chapter117',
        'chapter118',
        'chapter119',
        'chapter120'
      ]
    }
  ]
}
