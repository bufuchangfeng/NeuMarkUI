// pages/home/home.js
var app = getApp();

var classifyList = [
  {
    "id": 1,
    "tree": {
      "id": 1,
      "desc": "宝宝奶粉",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 1,
          "tree": {
            "id": 1,
            "desc": "牛奶粉",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%9B%E5%A5%B6%E7%B2%89.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 157,
                "tree": {
                  "id": 157,
                  "desc": null,
                  "desc2": "a2 PLATINUM",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2Fa2.jpg",
                  "popular": 157,
                  "nodes": null
                }
              },
              {
                "id": 7,
                "tree": {
                  "id": 7,
                  "desc": "德国爱他美",
                  "desc2": "Aptamil",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%88%B1%E4%BB%96%E7%BE%8E.jpg",
                  "popular": 7,
                  "nodes": null
                }
              },
              {
                "id": 161,
                "tree": {
                  "id": 161,
                  "desc": "爱他美白金",
                  "desc2": "Aptamil pro",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E7%99%BD%E9%87%91%E5%A5%B6%E7%B2%89-1.jpg",
                  "popular": 161,
                  "nodes": null
                }
              },
              {
                "id": 158,
                "tree": {
                  "id": 158,
                  "desc": "澳洲爱他美",
                  "desc2": "Aptamil",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E6%BE%B3%E6%B4%B2%E7%88%B1%E4%BB%96%E7%BE%8E.jpg",
                  "popular": 158,
                  "nodes": null
                }
              },
              {
                "id": 8,
                "tree": {
                  "id": 8,
                  "desc": "荷兰牛栏",
                  "desc2": "Nutrilon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%9B%E6%A0%8F.jpg",
                  "popular": 8,
                  "nodes": null
                }
              },
              {
                "id": 166,
                "tree": {
                  "id": 166,
                  "desc": "英国牛栏",
                  "desc2": "Cow&Cate",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89/%E8%8B%B1%E5%9B%BD%E7%89%9B%E6%A0%8Flogo.jpeg",
                  "popular": 166,
                  "nodes": null
                }
              },
              {
                "id": 9,
                "tree": {
                  "id": 9,
                  "desc": "德国喜宝有机",
                  "desc2": "HiPP",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%96%9C%E5%AE%9D.jpg",
                  "popular": 9,
                  "nodes": null
                }
              },
              {
                "id": 11,
                "tree": {
                  "id": 11,
                  "desc": "德国喜宝益生菌",
                  "desc2": "HiPP",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%96%9C%E5%AE%9D.jpg",
                  "popular": 11,
                  "nodes": null
                }
              },
              {
                "id": 13,
                "tree": {
                  "id": 13,
                  "desc": "澳洲贝拉米",
                  "desc2": "BELLMAY'S",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E8%B4%9D%E6%8B%89%E7%B1%B3.jpg",
                  "popular": 13,
                  "nodes": null
                }
              },
              {
                "id": 14,
                "tree": {
                  "id": 14,
                  "desc": "荷兰美素",
                  "desc2": "Hero Baby",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E8%8D%B7%E5%85%B0%E7%BE%8E%E7%B4%A0.jpg",
                  "popular": 14,
                  "nodes": null
                }
              },
              {
                "id": 12,
                "tree": {
                  "id": 12,
                  "desc": "德国特福芬",
                  "desc2": "Topfer",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%B9%E7%A6%8F%E8%8A%AC.jpg",
                  "popular": 12,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 2,
          "tree": {
            "id": 2,
            "desc": "羊奶粉",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%BE%8A%E5%A5%B6%E7%B2%89.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 10,
                "tree": {
                  "id": 10,
                  "desc": "德国泓乐",
                  "desc2": "Holle",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E5%BE%B7%E5%9B%BD%E6%B3%93%E4%B9%90.jpg",
                  "popular": 10,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 2,
    "tree": {
      "id": 2,
      "desc": "纸尿裤",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 4,
          "tree": {
            "id": 4,
            "desc": "纸尿裤",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 16,
                "tree": {
                  "id": 16,
                  "desc": "花王",
                  "desc2": "Merries",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E8%8A%B1%E7%8E%8B.jpg",
                  "popular": 16,
                  "nodes": null
                }
              },
              {
                "id": 17,
                "tree": {
                  "id": 17,
                  "desc": "大王",
                  "desc2": "Goon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E5%A4%A7%E7%8E%8B.jpg",
                  "popular": 17,
                  "nodes": null
                }
              },
              {
                "id": 18,
                "tree": {
                  "id": 18,
                  "desc": "尤妮佳",
                  "desc2": "Moony",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E5%B0%A4%E4%BD%B3%E5%A6%AE.jpg",
                  "popular": 18,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 29,
          "tree": {
            "id": 29,
            "desc": "湿巾",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E6%B9%BF%E5%B7%BE.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 49,
                "tree": {
                  "id": 49,
                  "desc": "贝亲",
                  "desc2": "Pigeon",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E4%BA%B2.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 16,
                "tree": {
                  "id": 16,
                  "desc": "花王",
                  "desc2": "Merries",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E8%8A%B1%E7%8E%8B.jpg",
                  "popular": 16,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 3,
    "tree": {
      "id": 3,
      "desc": "辅食营养",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 10,
          "tree": {
            "id": 10,
            "desc": "宝宝营养",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%AE%9D%E5%AE%9D%E8%90%A5%E5%85%BB.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 114,
                "tree": {
                  "id": 114,
                  "desc": "挪帝克",
                  "desc2": "NORDIC NATURALS",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 106,
                "tree": {
                  "id": 106,
                  "desc": "",
                  "desc2": "Sudocrem",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 55,
                "tree": {
                  "id": 55,
                  "desc": "铁元",
                  "desc2": "Salus",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fsalus.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 77,
                "tree": {
                  "id": 77,
                  "desc": "",
                  "desc2": "Ddrops",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 153,
                "tree": {
                  "id": 153,
                  "desc": "美赞臣",
                  "desc2": null,
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%BE%8E%E8%B5%9E%E8%87%A3.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 34,
                "tree": {
                  "id": 34,
                  "desc": "童年时光",
                  "desc2": "ChildLife",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FChildLife.jpg",
                  "popular": 34,
                  "nodes": null
                }
              },
              {
                "id": 35,
                "tree": {
                  "id": 35,
                  "desc": "",
                  "desc2": "Bio Island",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FBio-Island-1.jpg",
                  "popular": 35,
                  "nodes": null
                }
              },
              {
                "id": 73,
                "tree": {
                  "id": 73,
                  "desc": "佳思敏",
                  "desc2": "Nature's Way",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2F%E4%BD%B3%E6%80%9D%E6%95%8F.jpg",
                  "popular": 73,
                  "nodes": null
                }
              },
              {
                "id": 22,
                "tree": {
                  "id": 22,
                  "desc": "美林",
                  "desc2": "Mellin",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E7%BE%8E%E6%9E%97.jpg",
                  "popular": 22,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 5,
          "tree": {
            "id": 5,
            "desc": "米粉面食",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E7%B1%B3%E7%B2%89%E9%9D%A2%E9%A3%9F.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 20,
                "tree": {
                  "id": 20,
                  "desc": "世界最好",
                  "desc2": "Earth's best",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E4%B8%96%E7%95%8C%E6%9C%80%E5%A5%BD.jpg",
                  "popular": 20,
                  "nodes": null
                }
              },
              {
                "id": 21,
                "tree": {
                  "id": 21,
                  "desc": "嘉宝",
                  "desc2": "Gerber",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E5%98%89%E5%AE%9D.jpg",
                  "popular": 21,
                  "nodes": null
                }
              },
              {
                "id": 22,
                "tree": {
                  "id": 22,
                  "desc": "美林",
                  "desc2": "Mellin",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E7%BE%8E%E6%9E%97.jpg",
                  "popular": 22,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 6,
          "tree": {
            "id": 6,
            "desc": "蔬果泥",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E8%94%AC%E6%9E%9C%E6%B3%A5.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 22,
                "tree": {
                  "id": 22,
                  "desc": "美林",
                  "desc2": "Mellin",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E7%BE%8E%E6%9E%97.jpg",
                  "popular": 22,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 8,
          "tree": {
            "id": 8,
            "desc": "鱼泥肉泥",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E9%B1%BC%E6%B3%A5%E8%82%89%E6%B3%A5.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 116,
                "tree": {
                  "id": 116,
                  "desc": "简尼",
                  "desc2": "Jensens",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FJensen's.jpg",
                  "popular": 116,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 7,
          "tree": {
            "id": 7,
            "desc": "营养零食",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E8%90%A5%E5%85%BB%E9%9B%B6%E9%A3%9F.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 21,
                "tree": {
                  "id": 21,
                  "desc": "嘉宝",
                  "desc2": "Gerber",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E5%98%89%E5%AE%9D.jpg",
                  "popular": 21,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 31,
          "tree": {
            "id": 31,
            "desc": "烹饪油",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E7%83%B9%E9%A5%AA%E6%B2%B9.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 149,
                "tree": {
                  "id": 149,
                  "desc": "拉杜蓝乔",
                  "desc2": "LA TOURANGELLE",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E6%8B%89%E6%9D%9C%E8%93%9D%E4%B9%94.jpg",
                  "popular": 149,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 4,
    "tree": {
      "id": 4,
      "desc": "母婴专区",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 11,
          "tree": {
            "id": 11,
            "desc": "喂养用具",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%96%82%E5%85%BB%E7%94%A8%E5%85%B7.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 63,
                "tree": {
                  "id": 63,
                  "desc": "",
                  "desc2": "NUK",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 49,
                "tree": {
                  "id": 49,
                  "desc": "贝亲",
                  "desc2": "Pigeon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E4%BA%B2.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 52,
                "tree": {
                  "id": 52,
                  "desc": "啾啾",
                  "desc2": "chuchu",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Fchuchu.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 23,
                "tree": {
                  "id": 23,
                  "desc": "贝塔",
                  "desc2": "Betta",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E5%A1%94.jpg",
                  "popular": 23,
                  "nodes": null
                }
              },
              {
                "id": 60,
                "tree": {
                  "id": 60,
                  "desc": "",
                  "desc2": "Born free",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Fbornfree.jpg",
                  "popular": 60,
                  "nodes": null
                }
              },
              {
                "id": 24,
                "tree": {
                  "id": 24,
                  "desc": "可么多么",
                  "desc2": "comotomo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Fcomotomo.jpg",
                  "popular": 24,
                  "nodes": null
                }
              },
              {
                "id": 62,
                "tree": {
                  "id": 62,
                  "desc": "",
                  "desc2": "boon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Fboon.jpg",
                  "popular": 62,
                  "nodes": null
                }
              },
              {
                "id": 27,
                "tree": {
                  "id": 27,
                  "desc": "膳魔师",
                  "desc2": "THERMOS",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FTHERMOS.jpg",
                  "popular": 27,
                  "nodes": null
                }
              },
              {
                "id": 28,
                "tree": {
                  "id": 28,
                  "desc": "",
                  "desc2": "thinkbaby",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Fthinkbaby.jpg",
                  "popular": 28,
                  "nodes": null
                }
              },
              {
                "id": 29,
                "tree": {
                  "id": 29,
                  "desc": "麦肯齐",
                  "desc2": "munchkin",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FMunchkin.jpg",
                  "popular": 29,
                  "nodes": null
                }
              },
              {
                "id": 30,
                "tree": {
                  "id": 30,
                  "desc": "",
                  "desc2": "Lansinoh",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Flansionoh.jpg",
                  "popular": 30,
                  "nodes": null
                }
              },
              {
                "id": 50,
                "tree": {
                  "id": 50,
                  "desc": "和光堂",
                  "desc2": "WaKoDo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%85%89%E5%90%88%E5%A0%82.jpg",
                  "popular": 50,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 9,
          "tree": {
            "id": 9,
            "desc": "宝宝洗护",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%AE%9D%E5%AE%9D%E6%B4%97%E6%8A%A4.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 51,
                "tree": {
                  "id": 51,
                  "desc": "小林制药",
                  "desc2": "KOBAYASHI",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%B0%8F%E6%9E%97%E5%88%B6%E8%8D%AF.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 49,
                "tree": {
                  "id": 49,
                  "desc": "贝亲",
                  "desc2": "Pigeon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E4%BA%B2.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 31,
                "tree": {
                  "id": 31,
                  "desc": "加州宝宝",
                  "desc2": "CALIFORNIA BABY",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%8A%A0%E5%B7%9E%E5%AE%9D%E5%AE%9D.jpg",
                  "popular": 31,
                  "nodes": null
                }
              },
              {
                "id": 32,
                "tree": {
                  "id": 32,
                  "desc": "艾维诺",
                  "desc2": "Aveeno",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FAveeno.jpg",
                  "popular": 32,
                  "nodes": null
                }
              },
              {
                "id": 33,
                "tree": {
                  "id": 33,
                  "desc": "小蜜蜂",
                  "desc2": "BURT'S BEES",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%B0%8F%E8%9C%9C%E8%9C%82.jpg",
                  "popular": 33,
                  "nodes": null
                }
              },
              {
                "id": 50,
                "tree": {
                  "id": 50,
                  "desc": "和光堂",
                  "desc2": "WaKoDo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%85%89%E5%90%88%E5%A0%82.jpg",
                  "popular": 50,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 12,
          "tree": {
            "id": 12,
            "desc": "宝宝口腔护理",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%AE%9D%E5%AE%9D%E5%8F%A3%E8%85%94%E6%8A%A4%E7%90%86.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 49,
                "tree": {
                  "id": 49,
                  "desc": "贝亲",
                  "desc2": "Pigeon",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E4%BA%B2.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 43,
                "tree": {
                  "id": 43,
                  "desc": "狮王",
                  "desc2": "Lion",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E7%8B%AE%E7%8E%8B.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 113,
                "tree": {
                  "id": 113,
                  "desc": "香蕉宝宝",
                  "desc2": "BABY BANANA",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 13,
          "tree": {
            "id": 13,
            "desc": "宝宝玩具",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%AE%9D%E5%AE%9D%E7%8E%A9%E5%85%B7.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 29,
                "tree": {
                  "id": 29,
                  "desc": "麦肯齐",
                  "desc2": "munchkin",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FMunchkin.jpg",
                  "popular": 29,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 14,
          "tree": {
            "id": 14,
            "desc": "孕期营养",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%AD%95%E6%9C%9F%E8%90%A5%E5%85%BB.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": null,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 15,
          "tree": {
            "id": 15,
            "desc": "产后哺乳",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E4%BA%A7%E5%90%8E%E5%93%BA%E4%B9%B3.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 82,
                "tree": {
                  "id": 82,
                  "desc": "地球妈妈",
                  "desc2": "Earth Mama",
                  "level": null,
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 124,
                "tree": {
                  "id": 124,
                  "desc": "帕玛氏",
                  "desc2": "PALMER's",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 30,
                "tree": {
                  "id": 30,
                  "desc": "",
                  "desc2": "Lansinoh",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2Flansionoh.jpg",
                  "popular": 30,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 5,
    "tree": {
      "id": 5,
      "desc": "护肤美体",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 16,
          "tree": {
            "id": 16,
            "desc": "瘦身美体",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E7%98%A6%E8%BA%AB%E7%BE%8E%E4%BD%93.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 58,
                "tree": {
                  "id": 58,
                  "desc": "",
                  "desc2": "UNIMAT",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FUNIMAT.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 124,
                "tree": {
                  "id": 124,
                  "desc": "帕玛氏",
                  "desc2": "PALMER's",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 136,
                "tree": {
                  "id": 136,
                  "desc": null,
                  "desc2": "freezeframe",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2Ffreezeframe.jpg",
                  "popular": 136,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 17,
          "tree": {
            "id": 17,
            "desc": "护肤美肌",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E8%82%8C.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 64,
                "tree": {
                  "id": 64,
                  "desc": "花王碧柔",
                  "desc2": "Biore",
                  "level": null,
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 123,
                "tree": {
                  "id": 123,
                  "desc": null,
                  "desc2": "G&M",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 69,
                "tree": {
                  "id": 69,
                  "desc": "北海道",
                  "desc2": "Loshi",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 37,
                "tree": {
                  "id": 37,
                  "desc": "",
                  "desc2": "Swisse",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fswisse-1.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 67,
                "tree": {
                  "id": 67,
                  "desc": "资生堂",
                  "desc2": "Shiseido",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 91,
                "tree": {
                  "id": 91,
                  "desc": "贺本清",
                  "desc2": "Herbacin",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 43,
                "tree": {
                  "id": 43,
                  "desc": "狮王",
                  "desc2": "Lion",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E7%8B%AE%E7%8E%8B.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 118,
                "tree": {
                  "id": 118,
                  "desc": "可莱丝",
                  "desc2": "Mediheal",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 148,
                "tree": {
                  "id": 148,
                  "desc": null,
                  "desc2": "LG",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 58,
                "tree": {
                  "id": 58,
                  "desc": "",
                  "desc2": "UNIMAT",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FUNIMAT.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 72,
                "tree": {
                  "id": 72,
                  "desc": "",
                  "desc2": "Lucas",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 135,
                "tree": {
                  "id": 135,
                  "desc": "雪花秀",
                  "desc2": "Sulwhasoo",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg",
                  "popular": 135,
                  "nodes": null
                }
              },
              {
                "id": 121,
                "tree": {
                  "id": 121,
                  "desc": "伊思",
                  "desc2": "t'S SKIN",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E4%BC%8A%E6%80%9D.jpg",
                  "popular": 121,
                  "nodes": null
                }
              },
              {
                "id": 66,
                "tree": {
                  "id": 66,
                  "desc": "嘉娜宝",
                  "desc2": "Kanebo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E5%98%89%E5%A8%9C%E5%AE%9D.jpg",
                  "popular": 66,
                  "nodes": null
                }
              },
              {
                "id": 46,
                "tree": {
                  "id": 46,
                  "desc": "宝丽",
                  "desc2": "Pola",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2Fpola.jpg",
                  "popular": 46,
                  "nodes": null
                }
              },
              {
                "id": 96,
                "tree": {
                  "id": 96,
                  "desc": "",
                  "desc2": "SNP",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FSNP.jpg",
                  "popular": 96,
                  "nodes": null
                }
              },
              {
                "id": 97,
                "tree": {
                  "id": 97,
                  "desc": "肌肤之钥",
                  "desc2": "CPB",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FCPB-%E8%82%8C%E8%82%A4%E4%B9%8B%E9%92%A5.jpg",
                  "popular": 97,
                  "nodes": null
                }
              },
              {
                "id": 98,
                "tree": {
                  "id": 98,
                  "desc": "丽得姿",
                  "desc2": "LEADERS",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E4%B8%BD%E5%BE%97%E5%A7%BF.jpg",
                  "popular": 98,
                  "nodes": null
                }
              },
              {
                "id": 133,
                "tree": {
                  "id": 133,
                  "desc": "悦诗风吟",
                  "desc2": "innisfree",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2Finnisfree.jpg",
                  "popular": 133,
                  "nodes": null
                }
              },
              {
                "id": 146,
                "tree": {
                  "id": 146,
                  "desc": null,
                  "desc2": "AHC",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FAHC.jpg",
                  "popular": 146,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 18,
          "tree": {
            "id": 18,
            "desc": "彩妆隔离",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E5%BD%A9%E5%A6%86.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 31,
                "tree": {
                  "id": 31,
                  "desc": "加州宝宝",
                  "desc2": "CALIFORNIA BABY",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%8A%A0%E5%B7%9E%E5%AE%9D%E5%AE%9D.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 49,
                "tree": {
                  "id": 49,
                  "desc": "贝亲",
                  "desc2": "Pigeon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E4%BA%B2.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 134,
                "tree": {
                  "id": 134,
                  "desc": "赫拉",
                  "desc2": "HERA",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 87,
                "tree": {
                  "id": 87,
                  "desc": "贝德玛",
                  "desc2": "BIODERMA",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 135,
                "tree": {
                  "id": 135,
                  "desc": "雪花秀",
                  "desc2": "Sulwhasoo",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg",
                  "popular": 135,
                  "nodes": null
                }
              },
              {
                "id": 121,
                "tree": {
                  "id": 121,
                  "desc": "伊思",
                  "desc2": "t'S SKIN",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E4%BC%8A%E6%80%9D.jpg",
                  "popular": 121,
                  "nodes": null
                }
              },
              {
                "id": 46,
                "tree": {
                  "id": 46,
                  "desc": "宝丽",
                  "desc2": "Pola",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2Fpola.jpg",
                  "popular": 46,
                  "nodes": null
                }
              },
              {
                "id": 66,
                "tree": {
                  "id": 66,
                  "desc": "嘉娜宝",
                  "desc2": "Kanebo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E5%98%89%E5%A8%9C%E5%AE%9D.jpg",
                  "popular": 66,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 6,
    "tree": {
      "id": 6,
      "desc": "营养保健",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 19,
          "tree": {
            "id": 19,
            "desc": "女性保养",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2F%E5%A5%B3%E6%80%A7%E4%BF%9D%E5%85%BB.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": 36,
                  "nodes": null
                }
              },
              {
                "id": 37,
                "tree": {
                  "id": 37,
                  "desc": "",
                  "desc2": "Swisse",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fswisse-1.jpg",
                  "popular": 37,
                  "nodes": null
                }
              },
              {
                "id": 38,
                "tree": {
                  "id": 38,
                  "desc": "",
                  "desc2": "red seal",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FRed-Seal-1.jpg",
                  "popular": 38,
                  "nodes": null
                }
              },
              {
                "id": 76,
                "tree": {
                  "id": 76,
                  "desc": "健安喜",
                  "desc2": "GNC",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FGNC.jpg",
                  "popular": 76,
                  "nodes": null
                }
              },
              {
                "id": 54,
                "tree": {
                  "id": 54,
                  "desc": "",
                  "desc2": "Health Care",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FHealthy-Care.jpg",
                  "popular": 54,
                  "nodes": null
                }
              },
              {
                "id": 55,
                "tree": {
                  "id": 55,
                  "desc": "铁元",
                  "desc2": "Salus",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fsalus.jpg",
                  "popular": 55,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 20,
          "tree": {
            "id": 20,
            "desc": "男性健康",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2F%E7%94%B7%E6%80%A7%E5%81%A5%E5%BA%B7.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": 36,
                  "nodes": null
                }
              },
              {
                "id": 37,
                "tree": {
                  "id": 37,
                  "desc": "",
                  "desc2": "Swisse",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fswisse-1.jpg",
                  "popular": 37,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 21,
          "tree": {
            "id": 21,
            "desc": "中老年健康",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2F%E4%B8%AD%E8%80%81%E5%B9%B4%E5%81%A5%E5%BA%B7.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": 36,
                  "nodes": null
                }
              },
              {
                "id": 40,
                "tree": {
                  "id": 40,
                  "desc": "德国双心",
                  "desc2": "Doppel herz",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FDoppelherz.jpg",
                  "popular": 40,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 22,
          "tree": {
            "id": 22,
            "desc": "通用营养",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2F%E9%80%9A%E7%94%A8%E8%90%A5%E5%85%BB.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 74,
                "tree": {
                  "id": 74,
                  "desc": "",
                  "desc2": "NU-LAX",
                  "level": null,
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": 36,
                  "nodes": null
                }
              },
              {
                "id": 37,
                "tree": {
                  "id": 37,
                  "desc": "",
                  "desc2": "Swisse",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fswisse-1.jpg",
                  "popular": 37,
                  "nodes": null
                }
              },
              {
                "id": 40,
                "tree": {
                  "id": 40,
                  "desc": "德国双心",
                  "desc2": "Doppel herz",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FDoppelherz.jpg",
                  "popular": 40,
                  "nodes": null
                }
              },
              {
                "id": 76,
                "tree": {
                  "id": 76,
                  "desc": "健安喜",
                  "desc2": "GNC",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FGNC.jpg",
                  "popular": 76,
                  "nodes": null
                }
              },
              {
                "id": 54,
                "tree": {
                  "id": 54,
                  "desc": "",
                  "desc2": "Health Care",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FHealthy-Care.jpg",
                  "popular": 54,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 23,
          "tree": {
            "id": 23,
            "desc": "亚健康",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2F%E4%BA%9A%E5%81%A5%E5%BA%B7.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 36,
                "tree": {
                  "id": 36,
                  "desc": "澳佳宝",
                  "desc2": "BLACKMORES",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FBlackmores-1.jpg",
                  "popular": 36,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 7,
    "tree": {
      "id": 7,
      "desc": "居家日用",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 25,
          "tree": {
            "id": 25,
            "desc": "护发沐浴",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E6%8A%A4%E5%8F%91%E6%B2%90%E6%B5%B4.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 138,
                "tree": {
                  "id": 138,
                  "desc": "摩洛哥油",
                  "desc2": "MOROCCANOIL",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 148,
                "tree": {
                  "id": 148,
                  "desc": null,
                  "desc2": "LG",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 42,
                "tree": {
                  "id": 42,
                  "desc": "",
                  "desc2": "Reveur",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2Freveur.jpg",
                  "popular": 42,
                  "nodes": null
                }
              },
              {
                "id": 103,
                "tree": {
                  "id": 103,
                  "desc": "吕",
                  "desc2": "",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E5%90%95.jpg",
                  "popular": 103,
                  "nodes": null
                }
              },
              {
                "id": 112,
                "tree": {
                  "id": 112,
                  "desc": "箭牌",
                  "desc2": "Mane 'n Tail",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E7%AE%AD%E7%89%8C-1.jpg",
                  "popular": 112,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 26,
          "tree": {
            "id": 26,
            "desc": "口腔健康",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E5%8F%A3%E8%85%94%E5%81%A5%E5%BA%B7.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 38,
                "tree": {
                  "id": 38,
                  "desc": "",
                  "desc2": "red seal",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FRed-Seal-1.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 43,
                "tree": {
                  "id": 43,
                  "desc": "狮王",
                  "desc2": "Lion",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E7%8B%AE%E7%8E%8B.jpg",
                  "popular": 43,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 27,
          "tree": {
            "id": 27,
            "desc": "家居清洁",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E5%B1%85%E5%AE%B6%E6%B8%85%E6%B4%81.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 70,
                "tree": {
                  "id": 70,
                  "desc": "",
                  "desc2": "Febreze",
                  "level": null,
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 58,
                "tree": {
                  "id": 58,
                  "desc": "",
                  "desc2": "UNIMAT",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FUNIMAT.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 56,
                "tree": {
                  "id": 56,
                  "desc": "",
                  "desc2": "goat soap",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2Fgoat-soap.jpg",
                  "popular": 56,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 24,
          "tree": {
            "id": 24,
            "desc": "日常护理",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E5%B1%85%E5%AE%B6%E6%97%A5%E7%94%A8%2F%E5%8D%AB%E7%94%9F%E5%B7%BE.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 16,
                "tree": {
                  "id": 16,
                  "desc": "花王",
                  "desc2": "Merries",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E7%BA%B8%E5%B0%BF%E8%A3%A4%2F%E8%8A%B1%E7%8E%8B.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 58,
                "tree": {
                  "id": 58,
                  "desc": "",
                  "desc2": "UNIMAT",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FUNIMAT.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 147,
                "tree": {
                  "id": 147,
                  "desc": "参天",
                  "desc2": "SANTEN",
                  "level": "level3",
                  "logo": null,
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 64,
                "tree": {
                  "id": 64,
                  "desc": "花王碧柔",
                  "desc2": "Biore",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 50,
                "tree": {
                  "id": 50,
                  "desc": "和光堂",
                  "desc2": "WaKoDo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%85%89%E5%90%88%E5%A0%82.jpg",
                  "popular": null,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 8,
    "tree": {
      "id": 8,
      "desc": "进口美食",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 28,
          "tree": {
            "id": 28,
            "desc": "进口零食",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB%2F%E8%BF%9B%E5%8F%A3%E7%BE%8E%E9%A3%9F%2F%E8%BF%9B%E5%8F%A3%E9%9B%B6%E9%A3%9F.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 54,
                "tree": {
                  "id": 54,
                  "desc": "",
                  "desc2": "Health Care",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FHealthy-Care.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 119,
                "tree": {
                  "id": 119,
                  "desc": "德运",
                  "desc2": "DEVONDALE",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 80,
                "tree": {
                  "id": 80,
                  "desc": "卡乐比",
                  "desc2": "Calbee",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BF%9B%E5%8F%A3%E7%BE%8E%E9%A3%9F%2F%E5%8D%A1%E4%B9%90%E6%AF%94.jpg",
                  "popular": 80,
                  "nodes": null
                }
              },
              {
                "id": 41,
                "tree": {
                  "id": 41,
                  "desc": "新西兰康维他",
                  "desc2": "COMVITA",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FCOMVITA.jpg",
                  "popular": 41,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 9,
    "tree": {
      "id": 9,
      "desc": "轻奢女装",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 91,
          "tree": {
            "id": 91,
            "desc": "轻奢女装",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB/%E6%9C%8D%E9%A5%B0%E7%AE%B1%E5%8C%85/%E6%BD%AE%E6%B5%81%E5%A5%B3%E8%A3%85.png",
            "popular": null,
            "nodes": [
              {
                "id": 159,
                "tree": {
                  "id": 159,
                  "desc": "后",
                  "desc2": "Whoo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93/%E5%90%8E-1.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 160,
                "tree": {
                  "id": 160,
                  "desc": null,
                  "desc2": "DVF",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E6%9C%8D%E9%A5%B0%E7%AE%B1%E5%8C%85/DVF-logo.png",
                  "popular": 160,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 10,
    "tree": {
      "id": 10,
      "desc": "秒杀特惠清仓",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 101,
          "tree": {
            "id": 101,
            "desc": "秒杀",
            "desc2": null,
            "level": "level2",
            "logo": null,
            "popular": null,
            "nodes": [
              {
                "id": 32,
                "tree": {
                  "id": 32,
                  "desc": "艾维诺",
                  "desc2": "Aveeno",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FAveeno.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 81,
                "tree": {
                  "id": 81,
                  "desc": "芙丽芳丝",
                  "desc2": "freeplus",
                  "level": "level3",
                  "logo": "",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 121,
                "tree": {
                  "id": 121,
                  "desc": "伊思",
                  "desc2": "t'S SKIN",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E4%BC%8A%E6%80%9D.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 27,
                "tree": {
                  "id": 27,
                  "desc": "膳魔师",
                  "desc2": "THERMOS",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FTHERMOS.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 46,
                "tree": {
                  "id": 46,
                  "desc": "宝丽",
                  "desc2": "Pola",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2Fpola.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 29,
                "tree": {
                  "id": 29,
                  "desc": "麦肯齐",
                  "desc2": "munchkin",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FMunchkin.jpg",
                  "popular": null,
                  "nodes": null
                }
              }
            ]
          }
        },
        {
          "id": 102,
          "tree": {
            "id": 102,
            "desc": "特惠清仓",
            "desc2": null,
            "level": "level2",
            "logo": null,
            "popular": null,
            "nodes": [
              {
                "id": 21,
                "tree": {
                  "id": 21,
                  "desc": "嘉宝",
                  "desc2": "Gerber",
                  "level": null,
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E5%98%89%E5%AE%9D.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 135,
                "tree": {
                  "id": 135,
                  "desc": "雪花秀",
                  "desc2": "Sulwhasoo",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E9%9B%AA%E8%8A%B1%E7%A7%80.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 31,
                "tree": {
                  "id": 31,
                  "desc": "加州宝宝",
                  "desc2": "CALIFORNIA BABY",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%8A%A0%E5%B7%9E%E5%AE%9D%E5%AE%9D.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 14,
                "tree": {
                  "id": 14,
                  "desc": "荷兰美素",
                  "desc2": "Hero Baby",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E8%8D%B7%E5%85%B0%E7%BE%8E%E7%B4%A0.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 76,
                "tree": {
                  "id": 76,
                  "desc": "健安喜",
                  "desc2": "GNC",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2FGNC.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 149,
                "tree": {
                  "id": 149,
                  "desc": "拉杜蓝乔",
                  "desc2": "LA TOURANGELLE",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E6%8B%89%E6%9D%9C%E8%93%9D%E4%B9%94.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 20,
                "tree": {
                  "id": 20,
                  "desc": "世界最好",
                  "desc2": "Earth's best",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%BE%85%E9%A3%9F%E8%90%A5%E5%85%BB%2F%E4%B8%96%E7%95%8C%E6%9C%80%E5%A5%BD.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 37,
                "tree": {
                  "id": 37,
                  "desc": "",
                  "desc2": "Swisse",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E8%90%A5%E5%85%BB%E4%BF%9D%E5%81%A5%2Fswisse-1.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 23,
                "tree": {
                  "id": 23,
                  "desc": "贝塔",
                  "desc2": "Betta",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E8%B4%9D%E5%A1%94.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 121,
                "tree": {
                  "id": 121,
                  "desc": "伊思",
                  "desc2": "t'S SKIN",
                  "level": "level3",
                  "logo": "http://hqxz.oss-cn-beijing.aliyuncs.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2F%E4%BC%8A%E6%80%9D.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 58,
                "tree": {
                  "id": 58,
                  "desc": "",
                  "desc2": "UNIMAT",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2FUNIMAT.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 12,
                "tree": {
                  "id": 12,
                  "desc": "德国特福芬",
                  "desc2": "Topfer",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%B9%E7%A6%8F%E8%8A%AC.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 8,
                "tree": {
                  "id": 8,
                  "desc": "荷兰牛栏",
                  "desc2": "Nutrilon",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E5%AE%9D%E5%AE%9D%E5%A5%B6%E7%B2%89%2F%E7%89%9B%E6%A0%8F.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 61,
                "tree": {
                  "id": 61,
                  "desc": "维蕾德",
                  "desc2": "WELEDA",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2FWELEIDA.jpg",
                  "popular": null,
                  "nodes": null
                }
              },
              {
                "id": 46,
                "tree": {
                  "id": 46,
                  "desc": "宝丽",
                  "desc2": "Pola",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%8A%A4%E8%82%A4%E7%BE%8E%E4%BD%93%2Fpola.jpg",
                  "popular": null,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 11,
    "tree": {
      "id": 11,
      "desc": "时尚箱包",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 111,
          "tree": {
            "id": 111,
            "desc": "时尚箱包",
            "desc2": null,
            "level": "level2",
            "logo": "http://image.huanqiuxiaozhen.com/%E7%B2%BE%E9%80%89%E5%88%86%E7%B1%BB/%E6%9C%8D%E9%A5%B0%E7%AE%B1%E5%8C%85/%E7%AE%B1%E5%8C%85.jpg",
            "popular": null,
            "nodes": [
              {
                "id": 164,
                "tree": {
                  "id": 164,
                  "desc": "芙拉",
                  "desc2": "Furla",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E6%9C%8D%E9%A5%B0%E7%AE%B1%E5%8C%85/Furla-1.jpg",
                  "popular": 164,
                  "nodes": null
                }
              },
              {
                "id": 165,
                "tree": {
                  "id": 165,
                  "desc": "迈克·科尔斯",
                  "desc2": "Michael Kors",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo/%E6%9C%8D%E9%A5%B0%E7%AE%B1%E5%8C%85/Michael-Kors-1.jpg",
                  "popular": 165,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": 12,
    "tree": {
      "id": 12,
      "desc": "专场大促",
      "desc2": null,
      "level": "level1",
      "logo": null,
      "popular": null,
      "nodes": [
        {
          "id": 121,
          "tree": {
            "id": 121,
            "desc": "原产国奶粉专场",
            "desc2": null,
            "level": "level2",
            "logo": null,
            "popular": null,
            "nodes": [
              {
                "id": 50,
                "tree": {
                  "id": 50,
                  "desc": "和光堂",
                  "desc2": "WaKoDo",
                  "level": "level3",
                  "logo": "http://image.huanqiuxiaozhen.com/%E5%93%81%E7%89%8Clogo%2F%E6%AF%8D%E5%A9%B4%E4%B8%93%E5%8C%BA%2F%E5%85%89%E5%90%88%E5%A0%82.jpg",
                  "popular": null,
                  "nodes": null
                }
              }
            ]
          }
        }
      ]
    }
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyList: classifyList,
    curNav: 1,
    curIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log("可使用高度 = " + res.windowHeight + " , 屏幕高度 = " + res.screenHeight);
        that.setData({
          deviceHeight: res.windowHeight
        })
      },
      fail: function (res) {

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  switchLeftTab: function (e) {
    console.log(e);
    var index = e.target.dataset.index;
    this.setData({
      curNav: classifyList[index].id,
      curIndex: index,
      scrolltop: 0
    })
  }

})