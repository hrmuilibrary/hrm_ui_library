import React, { useMemo, useRef, useState } from 'react'
import {
  Select as _Select,
  MultiSelect as _MultiSelect,
  NestedSelect as _NestedSelect,
  ButtonSelect as _ButtonSelect,
  ProfileDropdown as _ProfileDropdown
} from '../components/Select'
import { Button } from '../components/Button'
import { Menu } from '../components/Menu'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import IconPerson from '../components/SVGIcons/IconPerson'
import IconInfo from '../components/SVGIcons/IconInfo'
import IconMore from '../components/SVGIcons/IconMore'
import { StoryFn, StoryObj } from '@storybook/react'
import {
  TButtonSelectPropTypes,
  TMultiSelectPropTypes,
  TSingleSelectPropTypes
} from '../components/Select/types'
import IconSignOut from '../components/SVGIcons/IconSignOut'
import IconQuestion from '../components/SVGIcons/IconQuestion'
import IconChatMultiple from '../components/SVGIcons/IconChatMultiple'
import IconAm from '../components/SVGIcons/IconAm'
import IconGb from '../components/SVGIcons/IconGb'
import IconChevronDown from '../components/SVGIcons/IconChevronDown'
import IconChevronUp from '../components/SVGIcons/IconChevronUp'

type TItemValue = string | number | null
declare type TItemLabel = string

type TSelectOption = {
  value: TItemValue
  label: TItemLabel
  meta?: string
  disabled?: boolean
  children?: TSelectOption[]
  avatar?: {
    url: string
    initials?: string
  }
}

type TSelectOptions = TSelectOption[]

type TSelectGroupOption = {
  title: string
  data: TSelectOptions
}

type TSelectGroupOptions = TSelectGroupOption[]

export default {
  title: 'Select',
  component: _Select,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' }
    },
    language: { control: 'radio', options: ['en', 'ru', 'hy'] }
  }
}

const BUTTON_SELECT_OPTIONS = [
  {
    value: 'jan',
    label: 'Jan'
  },
  {
    value: 'feb',
    label: 'Feb'
  },
  {
    value: 'mrch',
    label: 'March'
  },
  {
    value: 'apr',
    label: 'April'
  },
  {
    value: 'may',
    label: 'May'
  },
  {
    value: 'jun',
    label: 'Jun'
  },
  {
    value: 'jul',
    label: 'Jul'
  },
  {
    value: 'aug',
    label: 'Aug'
  },
  {
    value: 'sep',
    label: 'Sep'
  },
  {
    value: 'oct',
    label: 'Oct'
  },
  {
    value: 'nov',
    label: 'Nov'
  },
  {
    value: 'dec',
    label: 'Dec'
  }
]

const OPTIONS: TSelectOptions = [
  {
    value: 1,
    label:
      'Armeniaaasdasdasdasdlkashdkjlashdkjasdkjashkdjhaskjdhdaskjdhaskjhdkajsdkjasdkjashdjkashdkjhaskdhaskjdhaskjdhaskjdhaskjhdkjas',
    meta: 'AM'
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 3,
    label: 'France    France    France',
    meta: 'FR'
  },
  {
    value: 4,
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 5,
    label: 'Germany',
    meta: 'De'
  },
  {
    value: 6,
    label: 'Australia',
    meta: 'AU'
  },
  {
    value: 7,
    label: 'Hungary',
    meta: 'HY'
  },
  {
    value: 8,
    label: 'Georgia',
    meta: 'GE'
  },
  {
    value: 9,
    label: 'Brazil',
    meta: 'BR'
  },
  {
    value: 10,
    label: 'Norway',
    meta: 'NR'
  }
  // {
  //   value: 11,
  //   label: 'Mexico',
  //   meta: 'MC'
  // }
]

const MOCK_DATA: TSelectOptions = [
  {
    value: 1,
    label: 'Zhanna Yeghiazaryan',
    meta: 'Junior Dev',
    disabled: true,
    avatar: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s'
    }
  },
  {
    value: 2,
    label: 'Marta Kostumyan',
    meta: 'Senior Dev',
    disabled: true,
    avatar: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s'
    }
  },
  {
    value: 3,
    label: 'Lilit Matinyan',
    avatar: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s'
    }
  },
  {
    value: 4,
    label: 'Luiza Stepanyan',
    avatar: { url: '', initials: 'LS' }
  },
  {
    value: 5,
    label: 'Artur Hakobyan'
  },
  {
    value: 6,
    label: 'Lianna Mirzoyan'
  },
  {
    value: 7,
    label: 'Ani Ghazaryan'
  },
  {
    value: 8,
    label: 'Liana Mirzakhanyan'
  },
  {
    value: 9,
    label: 'Petros Stepanyan'
  },
  {
    value: 10,
    label: 'Armine Avagyan'
  },
  {
    value: 11,
    label: 'Anna Margaryan'
  },
  {
    value: 12,
    label: 'Arsen Hakobyan'
  },
  {
    value: 13,
    label: 'Gohar Avagimyan'
  },
  {
    value: 14,
    label: 'Garnik Arakelyan'
  },
  {
    value: 15,
    label: 'Tamara Garsevanyan'
  },
  {
    value: 16,
    label: 'Argishti Hovhannisyan'
  },
  {
    value: 17,
    label: 'Igor Abrahamyan'
  },
  {
    value: 18,
    label: 'Hasmik Pivazyan'
  },
  {
    value: 19,
    label: 'Vazgen Khachatryan'
  },
  {
    value: 20,
    label: 'Lusine Hovhannisyan'
  },
  {
    value: 21,
    label: 'Lusine Bayramyan'
  },
  {
    value: 22,
    label: 'Levon Petrosyan'
  },
  {
    value: 23,
    label: 'Arus Grigoryan'
  },
  {
    value: 24,
    label: 'Tatev Badalyan'
  },
  {
    value: 25,
    label: 'Anomeh Sargsyan'
  },
  {
    value: 26,
    label: 'Garik Naltakyan'
  },
  {
    value: 27,
    label: 'Lilit Bakaryan'
  },
  {
    value: 28,
    label: 'Lilit Grigoryan'
  },
  {
    value: 29,
    label: 'Susanna Mshetsyan'
  },
  {
    value: 30,
    label: 'Ani Ivanyan'
  },
  {
    value: 31,
    label: 'Rafik Smbatyan'
  },
  {
    value: 32,
    label: 'Davit Pogosian'
  },
  {
    value: 33,
    label: 'Anna Arshakyan'
  },
  {
    value: 34,
    label: 'Lala Apresyan'
  },
  {
    value: 35,
    label: 'Ani Avalyan'
  },
  {
    value: 36,
    label: 'Anahit Petrosyan'
  },
  {
    value: 37,
    label: 'Astghik Diloyan'
  },
  {
    value: 38,
    label: 'Gevorg Gzraryan'
  },
  {
    value: 39,
    label: 'Nare Torosyan'
  },
  {
    value: 40,
    label: 'Albert Avagyan'
  },
  {
    value: 41,
    label: 'Svetlana Nahapetyan'
  },
  {
    value: 42,
    label: 'Karen Petrosyan'
  },
  {
    value: 43,
    label: 'Arpine Tiunova'
  },
  {
    value: 44,
    label: 'Henri Mirzakhanyan'
  },
  {
    value: 45,
    label: 'Anna Hovhannisyan'
  },
  {
    value: 46,
    label: 'Lusine Shahinyan'
  },
  {
    value: 47,
    label: 'Gayane Mukuchyan'
  },
  {
    value: 48,
    label: 'Anna Sahakyan'
  },
  {
    value: 49,
    label: 'Mariam Gyulumyan'
  },
  {
    value: 50,
    label: 'Hovhannes Shahbazyan'
  },
  {
    value: 51,
    label: 'Garik Babinyan'
  },
  {
    value: 52,
    label: 'Diana Abrahamyan'
  },
  {
    value: 53,
    label: 'Narek Safaryan'
  },
  {
    value: 54,
    label: 'Lilia Moffat'
  },
  {
    value: 55,
    label: 'Hakob Mesropyan'
  },
  {
    value: 56,
    label: 'Manushak Martirosyan'
  },
  {
    value: 57,
    label: 'Mesrop Yeghiazaryan'
  },
  {
    value: 58,
    label: 'David Badalyan'
  },
  {
    value: 59,
    label: 'Levon Melyan'
  },
  {
    value: 60,
    label: 'Kamo Bakhtamyan'
  },
  {
    value: 61,
    label: 'Anna Grigoryan'
  },
  {
    value: 62,
    label: 'Hasmik Asryan'
  },
  {
    value: 63,
    label: 'Erik Grigoryan'
  },
  {
    value: 64,
    label: 'Ani Sargsyan'
  },
  {
    value: 65,
    label: 'Ella Petrosyan'
  },
  {
    value: 66,
    label: 'Hasmik Gasparyan'
  },
  {
    value: 67,
    label: 'Tsovinar Gabrielyan'
  },
  {
    value: 68,
    label: 'Ani Manukyan'
  },
  {
    value: 69,
    label: 'Karen Varagyan'
  },
  {
    value: 70,
    label: 'Ruzanna Tovmasyan'
  },
  {
    value: 71,
    label: 'Samvel Harutyunyan'
  },
  {
    value: 72,
    label: 'Venera Martirosyan'
  },
  {
    value: 73,
    label: 'Anna Yepremyan'
  },
  {
    value: 74,
    label: 'Nane Amiryan'
  },
  {
    value: 75,
    label: 'Mariam Ha. Hovhannisyan'
  },
  {
    value: 76,
    label: 'Meline Gabrielyan'
  },
  {
    value: 77,
    label: 'Richard Simonyan'
  },
  {
    value: 78,
    label: 'Sirush Gaboyan'
  },
  {
    value: 79,
    label: 'Yeranuhi Davtyan'
  },
  {
    value: 80,
    label: 'Gevorg Harutyunyan'
  },
  {
    value: 81,
    label: 'Arman Andreasyan'
  },
  {
    value: 82,
    label: 'Marjan Yezikyan'
  },
  {
    value: 83,
    label: 'Alina Stepanyan'
  },
  {
    value: 84,
    label: 'Sona Harutyunyan'
  },
  {
    value: 85,
    label: 'Lusine Amirjanyan'
  },
  {
    value: 86,
    label: 'Ani Saghatelyan'
  },
  {
    value: 87,
    label: 'Marina Khachatryan'
  },
  {
    value: 88,
    label: 'Gohar Zurabyan'
  },
  {
    value: 89,
    label: 'Armen Hambaryan'
  },
  {
    value: 90,
    label: 'Gayane Harutyunyan'
  },
  {
    value: 91,
    label: 'Iren Avetisyan'
  },
  {
    value: 92,
    label: 'Sona Kalemjyan'
  },
  {
    value: 93,
    label: 'Tatevik Karakhanyan'
  },
  {
    value: 94,
    label: 'Mariam G. Khachatryan'
  },
  {
    value: 95,
    label: 'Shushan Dalakyan'
  },
  {
    value: 96,
    label: 'Arkadi Seraydaryan'
  },
  {
    value: 97,
    label: 'Armen S. Davtyan'
  },
  {
    value: 98,
    label: 'Suren Sahakyan'
  },
  {
    value: 99,
    label: 'Aramayis Avetisyan'
  },
  {
    value: 100,
    label: 'Patrik Simonyan'
  },
  {
    value: 101,
    label: 'Mane Burnazyan'
  },
  {
    value: 102,
    label: 'Andranik Sargsyan'
  },
  {
    value: 103,
    label: 'Sona Frangyan'
  },
  {
    value: 104,
    label: 'Sergey Arushanyan'
  },
  {
    value: 105,
    label: 'Narine Stepanyan'
  },
  {
    value: 106,
    label: 'Erika Mkhitaryan'
  },
  {
    value: 107,
    label: 'Khatun Ohanjanyan'
  },
  {
    value: 108,
    label: 'Anna Aslanyan'
  },
  {
    value: 109,
    label: 'Narine Avagyan'
  },
  {
    value: 110,
    label: 'Mariam Sukiasyan'
  },
  {
    value: 111,
    label: 'Hasmik Sargisyan'
  },
  {
    value: 112,
    label: 'Mariam Mnatsakanyan'
  },
  {
    value: 113,
    label: 'Meri Karapetyan'
  },
  {
    value: 114,
    label: 'Marine Mkrtchyan'
  },
  {
    value: 115,
    label: 'Khanum Torosyan'
  },
  {
    value: 116,
    label: 'Rimma Manukyan'
  },
  {
    value: 117,
    label: 'Anna Mayilyan'
  },
  {
    value: 118,
    label: 'Karen Bagiyan'
  },
  {
    value: 119,
    label: 'Arina Sukiasyan'
  },
  {
    value: 120,
    label: 'Arus S. Grigoryan'
  },
  {
    value: 121,
    label: 'Lusine Sukiasyan'
  },
  {
    value: 122,
    label: 'Knarik Aghajanyan'
  },
  {
    value: 123,
    label: 'Anush Petrosyan'
  },
  {
    value: 124,
    label: 'Marine Hayrapetyan'
  },
  {
    value: 125,
    label: 'Hrant Hayrapetyan'
  },
  {
    value: 126,
    label: 'Armine V. Hovhannisyan'
  },
  {
    value: 127,
    label: 'Lilit Nersisyan'
  },
  {
    value: 128,
    label: 'Silva Grigoryan'
  },
  {
    value: 129,
    label: 'Shahen Harutyunyan'
  },
  {
    value: 130,
    label: 'Roman Tadevosyan'
  },
  {
    value: 131,
    label: 'Kristina Poghosyan'
  },
  {
    value: 132,
    label: 'Tehmine Abrahamyan'
  },
  {
    value: 133,
    label: 'Kristine Badoyan'
  },
  {
    value: 134,
    label: 'Gevorg Manucharyan'
  },
  {
    value: 135,
    label: 'Mariam Hayrapetyan'
  },
  {
    value: 136,
    label: 'Heghine Asatryan'
  },
  {
    value: 137,
    label: 'Armen Alikhanyan'
  },
  {
    value: 138,
    label: 'Liana Dimaksyan'
  },
  {
    value: 139,
    label: 'Gayane Arakelyan'
  },
  {
    value: 140,
    label: 'Kolya Aghajanyan'
  },
  {
    value: 141,
    label: 'Anna Khachatryan'
  },
  {
    value: 142,
    label: 'Mnacakan Grigoryan'
  },
  {
    value: 143,
    label: 'Shushanik Karapetyan'
  },
  {
    value: 144,
    label: 'Lusine Zakaryan'
  },
  {
    value: 145,
    label: 'Silva Krkyasharyan'
  },
  {
    value: 146,
    label: 'Nerses Ktunyan'
  },
  {
    value: 147,
    label: 'Seda Gevorgyan'
  },
  {
    value: 148,
    label: 'Gevorg Grigoryan'
  },
  {
    value: 149,
    label: 'Aram Avetyan'
  },
  {
    value: 150,
    label: 'Heghine Badaliants'
  },
  {
    value: 151,
    label: 'Karine Mnatsakanyan'
  },
  {
    value: 152,
    label: 'Gevorg Madoyan'
  },
  {
    value: 153,
    label: 'Arman Aharonyan'
  },
  {
    value: 154,
    label: 'Aida Yeghiazaryan'
  },
  {
    value: 155,
    label: 'Kristine Krmzyan'
  },
  {
    value: 156,
    label: 'Gayane Sargsyan'
  },
  {
    value: 157,
    label: 'Hasmik Nalbandyan'
  },
  {
    value: 158,
    label: 'Arthur Martirosyan'
  },
  {
    value: 159,
    label: 'Lilia Kostandyan'
  },
  {
    value: 160,
    label: 'Armen Grigoryan'
  },
  {
    value: 161,
    label: 'Liana Tadevosyan'
  },
  {
    value: 162,
    label: 'Boris Shahinyan'
  },
  {
    value: 163,
    label: 'Arevhat Nokhoudian'
  },
  {
    value: 164,
    label: 'Gohar Abovyan'
  },
  {
    value: 165,
    label: 'Meri Aslanyan'
  },
  {
    value: 166,
    label: 'Lilit Khanzadyan'
  },
  {
    value: 167,
    label: 'Karlen Sargsyan'
  },
  {
    value: 168,
    label: 'Aram Mnoyan'
  },
  {
    value: 169,
    label: 'Anna Bakhshyan'
  },
  {
    value: 170,
    label: 'Arman Theodoros'
  },
  {
    value: 171,
    label: 'Ani Mikayelyan'
  },
  {
    value: 172,
    label: 'Tigran Vardanyan'
  },
  {
    value: 173,
    label: 'Mariam Sargsyan'
  },
  {
    value: 174,
    label: 'Ani Voskanyan'
  },
  {
    value: 175,
    label: 'Alvard Allahverdyan'
  },
  {
    value: 176,
    label: 'Milena Germanovich'
  },
  {
    value: 177,
    label: 'Pavel Poghosyan'
  },
  {
    value: 178,
    label: 'Kristine Vasilyan'
  },
  {
    value: 179,
    label: 'Meri Makinyan'
  },
  {
    value: 180,
    label: 'Mariam Amirbekyan'
  },
  {
    value: 181,
    label: 'Samvel Petrosyan'
  },
  {
    value: 182,
    label: 'Sargis Serobyan'
  },
  {
    value: 183,
    label: 'Ashot Ghavalyan'
  },
  {
    value: 184,
    label: 'Mariam Avetisyan'
  },
  {
    value: 185,
    label: 'Yeva Arevshatyan'
  },
  {
    value: 186,
    label: 'Artur Poghosyan'
  },
  {
    value: 187,
    label: 'Yeghia Khachatryan'
  },
  {
    value: 188,
    label: 'Sona Hovhannisyan'
  },
  {
    value: 189,
    label: 'Anahit Navasardova'
  },
  {
    value: 190,
    label: 'Karen Danielyan'
  },
  {
    value: 191,
    label: 'Arman Sargsyan'
  },
  {
    value: 192,
    label: 'Anika Arzumanyan'
  },
  {
    value: 193,
    label: 'Anna Matasyan'
  },
  {
    value: 194,
    label: 'Larisa Karapetyan'
  },
  {
    value: 195,
    label: 'Karine Ghazaryan'
  },
  {
    value: 196,
    label: 'Nare Zalinyan'
  },
  {
    value: 197,
    label: 'Mariam Karapetyan'
  },
  {
    value: 198,
    label: 'Karen V. Petrosyan'
  },
  {
    value: 199,
    label: 'Grigor Hambardzumyan'
  },
  {
    value: 200,
    label: 'Zaven Davtyan'
  },
  {
    value: 201,
    label: 'Edgar Azibekyan'
  },
  {
    value: 202,
    label: 'Armen Gevorgyan'
  }
]

const OPTIONS_CITIES: TSelectOptions = [
  {
    value: 'yerevan',
    label: 'Yerevan',
    avatar: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxctjU21pUENIsGN1F4qY21P7GfdEbhTMp2g&s'
    }
  },
  {
    value: 'rome',
    label: 'Rome'
  },
  {
    value: 'paris',
    label: 'Paris'
  },
  {
    value: 'aaaa',
    label: 'iiii'
  }
]

const OPTIONS_GROUPED: TSelectGroupOptions = [
  {
    title: 'Countries',
    data: OPTIONS
  },
  {
    title: 'Cities',
    data: OPTIONS_CITIES
  }
]

const OPTIONS_NESTED: TSelectOptions = [
  {
    value: 1,
    label: 'Ameribank',
    children: [
      {
        value: 2,
        label: 'BOD',
        children: [
          {
            value: 3,
            label: 'Managment board'
          },
          {
            value: 4,
            label: '4'
          }
        ]
      },
      {
        value: 10,
        label: '3',
        children: [
          {
            value: 5,
            label: '5'
          },
          {
            value: 6,
            label: '6',
            children: [
              {
                value: 7,
                label: '7'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 8,
    label: '8',
    children: [
      {
        value: 9,
        label: '9'
      },
      {
        value: 10,
        label: '10'
      }
    ]
  }
]

const languagesOptions = [
  {
    label: 'Հայ',
    value: 'AM',
    optionLeftIcon: {
      Component: IconAm
    }
  },
  {
    label: 'Eng',
    value: 'EN',
    optionLeftIcon: {
      Component: IconGb
    }
  }
]

// -----------SINGLE SELECT---------
const Template: StoryFn<TSingleSelectPropTypes> = (args) => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | undefined>(MOCK_DATA[0].value)
  const ref = useRef<HTMLDivElement | null>(null)

  const subMenuItems = useMemo(() => {
    return [
      {
        label: 'Primary',
        value: 1,
        handler: () => console.log('primary')
      },
      {
        label: 'De-attach',
        value: 2,
        handler: () => () => console.log('de attach')
      }
    ]
  }, [])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const openMenu = (e: TClickEventType) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }
  const closeMenu = () => setIsOpen(false)

  return (
    <div style={{ display: 'flex', height: '100vh', width: 300, justifyContent: 'center' }}>
      <_Select
        {...args}
        dataId={'single-select'}
        // tooltipAddons={{ position: Positions.TOP_LEFT, text: '' }}
        // isRequiredField
        withSearch
        options={MOCK_DATA}
        outerHelperText="helper text"
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        // withSearch={true}
        innerHelperText="Results"
        optionRightIconComponent={() => {
          return (
            <div ref={ref} style={{ position: 'absolute', right: '16px' }}>
              <IconMore size="small" onClick={openMenu} />
              {ref.current && (
                <Menu
                  isOpen={isOpen}
                  parentRef={ref.current}
                  menuItems={subMenuItems}
                  onClose={closeMenu}
                />
              )}
            </div>
          )
        }}
      />
    </div>
  )
}
export const Select: StoryObj<TSingleSelectPropTypes> = Template.bind({})

// -----------ButtonSelect---------
const Template2: StoryFn<TButtonSelectPropTypes> = (args) => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | undefined>(null)

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        position: 'absolute',
        top: 100
      }}
    >
      <_ButtonSelect
        {...args}
        size="small"
        placeHolder="Select month"
        // tooltipAddons={{ position: 'bottom-left' }}
        isRequiredField
        options={BUTTON_SELECT_OPTIONS}
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        dropdownWidth={300}
        // optionRightIconComponent={(value) => <>{value}</div>}
      />
    </div>
  )
}
export const ButtonSelect: StoryObj<TButtonSelectPropTypes> = Template2.bind({})

const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  return (
    <div ref={setButtonRef}>
      <Button type="tertiary" onClick={open} iconProps={{ Component: IconMore }} size="small" />
      {buttonRef ? (
        <Menu
          menuItems={[
            {
              label: 'delete',
              value: 'delete',
              handler: () => {
                console.log('delete')
              }
            }
          ]}
          parentRef={buttonRef}
          onClose={close}
          isOpen={isOpen}
        />
      ) : null}
    </div>
  )
}
Select.args = {
  size: 'large',
  disabled: false,
  isLoading: false,
  options: OPTIONS,
  label: 'country',
  placeHolder: 'Select country',
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}

// -----------MULTISELECT---------
const MultiSelectTemplate: StoryFn<TMultiSelectPropTypes> = (args) => {
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>([])

  console.log(selectedValues)

  const set = (value: TSelectedValue[], isChecked: boolean) => {
    setSelectedValues(value)
    console.log(isChecked)
  }
  return (
    <div
      style={{ width: 250, height: '100vh', position: 'absolute', left: 500, top: 10 }}
      className="ddddd"
    >
      <_MultiSelect
        {...args}
        // isButtonSelect={true}
        dropdownWidth={400}
        align="right"
        // maxSelectCount={3}
        selectedItems={selectedValues}
        setSelectedItems={set}
        labelRightIconComponent={() => (
          <IconPerson
            size="xsmall"
            className="mr-4"
            onClick={(e: any) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          />
        )}
        optionRightIconComponent={() => <ButtonMenu />}
      />
    </div>
  )
}
export const MultiSelect: StoryObj<TMultiSelectPropTypes> = MultiSelectTemplate.bind({})

// @ts-ignore
MultiSelect.args = {
  isLoading: false,
  label: 'Select',
  options: MOCK_DATA,
  placeHolder: 'Select country',
  hideSelectedOptions: true,
  helperText: 'To be filled in only for USA, Canada and European countries.',
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
  // disabled: true
  // labelRightIconComponent: <IconPerson size="xsmall" className="mr-4" />,
  // optionRightIconComponent: <IconPerson size="xsmall" />
}

// ----------NESTED_SELECT---------------

const NestedSelectTemplate = (args: any): React.ReactElement => {
  const [selected, setSelected] = useState<TSelectOption>({
    value: 3,
    label: 'Management board'
  })

  return (
    <div style={{ width: 320, position: 'absolute', left: 300 }}>
      <_NestedSelect
        {...args}
        selected={selected}
        setSelectedValue={setSelected}
        initialSelectedFolderIds={[1, 2]}
      />
    </div>
  )
}
export const NestedSelect = NestedSelectTemplate.bind({})

// @ts-ignore
NestedSelect.args = {
  isLoading: false,
  label: 'Select',
  options: OPTIONS_NESTED,
  placeHolder: 'Select country',
  labelLeftIconProps: { Component: IconPerson },
  labelRightIconComponent: () => <IconPerson size="xsmall" className="mr-4" />,
  optionRightIconComponent: () => (
    <IconMore
      size="xsmall"
      onClick={(e: any) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    />
  ),
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />
}

// ----------LANGUAGE-SELECT----------------

const LanguageSelectTemplate: StoryFn<TSingleSelectPropTypes> = (args) => {
  const [selectedValue, setSelectedValue] = useState<TItemValue | undefined>(null)

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContengt: 'center', width: '20vw' }}>
      <_Select
        {...args}
        options={languagesOptions}
        selectedItem={selectedValue}
        setSelectedItem={setSelectedValue}
        className={'select--language'}
        selectRightIconProps={{
          Component: IconChevronDown,
          size: 'small'
        }}
        selectRightIconOpenedProps={{
          Component: IconChevronUp,
          size: 'small'
        }}
      />
    </div>
  )
}
export const LanguageSelect: StoryObj<TSingleSelectPropTypes> = LanguageSelectTemplate.bind({})

// ----------PROFILE DROPDOWN---------------

const ProfileDropdownTemplate = (args: any): React.ReactElement => {
  return (
    <div
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 300
      }}
    >
      <div style={{ position: 'absolute', left: 300 }}>
        <_ProfileDropdown {...args} />
      </div>
    </div>
  )
}

export const ProfileDropdown = ProfileDropdownTemplate.bind({})

// @ts-ignore
ProfileDropdown.args = {
  avatar: <Avatar size={'medium'} initials={'RG'} />,
  name: 'Mariam Yeghiazaryan',
  email: 'mariam.yeghiazaryan@gmail.com',
  bodyItems: [
    {
      icon: <IconQuestion size={'small'} className={'mr-8'} />,
      text: 'Հաճախ տրվող հարցեր',
      url: '#s',
      rightInfoProps: <Badge text={'5'} type={'tertiary'} className={'ml-12'} />
    },
    {
      icon: <IconChatMultiple size={'small'} className={'mr-8'} />,
      text: 'Հետադարձ կապ',
      url: '#s'
    }
  ],
  footerItems: [
    {
      icon: <IconSignOut size={'small'} className={'mr-8'} />,
      text: 'Ելք',
      onclick: () => alert('button clicked')
    }
  ]
}

// ----------FILTERDROPDOWN---------------

// const FilterDropdownTemplate = (args: any): React.ReactElement => {
//   const [selectedValues, setSelectedValues] = useState<TItemValue[]>([])
//   const [isOpen, setIsOpen] = useState(false)
//   const containerRef = useRef(null)
//   const closeHandler = () => setIsOpen(false)
//   return (
//     <div
//       style={{
//         width: 320,
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'absolute',
//         left: 300
//       }}
//     >
//       <div style={{ position: 'absolute', left: 300 }} ref={containerRef}>
//         <Button
//           type="secondary"
//           iconProps={{ Component: IconFilter }}
//           buttonText={'filter'}
//           onClick={() => setIsOpen(!isOpen)}
//         />
//         <_FilterDropdown
//           {...args}
//           parentRef={containerRef.current}
//           closeHandler={closeHandler}
//           isOpen={isOpen}
//           selectedItems={selectedValues}
//           setSelectedItems={setSelectedValues}
//         />
//       </div>
//     </div>
//   )
// }
// export const FilterDropdown = FilterDropdownTemplate.bind({})

// FilterDropdown.args = {
//   isLoading: true,
//   options: OPTIONS_NESTED,
//   avatar: image.src,
//   labelLeftIconProps: { Component: IconPerson },
//   labelRightIconComponent: () => <IconPerson size="xsmall" className="mr-4" />,
//   optionRightIconComponent: () => <IconMore size="xsmall" />
// }
