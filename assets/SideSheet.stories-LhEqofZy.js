import{j as e}from"./jsx-runtime-BQ8XKDWZ.js";import{R as $,r}from"./iframe-DuzJ3-xf.js";import{B as l}from"./Button-DsWIgKwr.js";import{b as z,M as V}from"./Popover-CQTjngkz.js";import{c as F}from"./index-BXUB3CAz.js";import"./types-3LfPC6TZ.js";import{T as G}from"./Text-pLVOucf6.js";import"./Tooltip-Bp9DWzwB.js";import{F as H}from"./FormContainer-C7eCsqhv.js";import{M as U}from"./index-D5YWre8t.js";import{u as W}from"./useOnOutsideClick-DwyUj8qM.js";import{A as Y,m as A}from"./AnimatePresenceWrapper-BffjZJ1d.js";import{u as J}from"./useDispatchEventOnScroll-xYip-gWD.js";import{C as K}from"./Checkbox-DtqaWqoG.js";import{I as Q,b as X}from"./IconCaretUp-BaKjvf9e.js";import{I as B}from"./IconDismissFilled-Mm6VXrZ1.js";import{b as Z,a as _}from"./index.esm-BvwEacxj.js";import{b as ee}from"./IconArrowDownloadFilled-DU71WUq-.js";import{I as ie}from"./IconMore-DXKg6SNE.js";import{I as se}from"./IconPerson-B5ALf4ce.js";import{I as te}from"./IconInfo-BaYuM2sj.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-Ceoj2xTf.js";import"./helpers-CH0y8nQM.js";import"./Link-CxigbnfV.js";import"./index-BoNFqYXL.js";import"./NestedMenu-B3f0TTxp.js";import"./CollapseGroup-DXk9mGz-.js";import"./Divider-BWERKW5b.js";import"./IconChevronDown-DrlTxOME.js";import"./IconChevronUp-SqrhYKWN.js";import"./IconChevronRight-DYe2eMk9.js";import"./AvatarGroup-C8tvysow.js";import"./DropzoneFileUpload-BlC4d78K.js";import"./Label-DQSMISYM.js";import"./useFormProps-DIvwJoaV.js";import"./ErrorMessage-C5HC5Vf_.js";import"./IconDynamicComponent-Dk4FBIIr.js";import"./Snackbar-CkI-3z82.js";import"./Alert-By5cvU4a.js";import"./Progress-_ekFhkAr.js";import"./IconAdd-CoH_JCxp.js";import"./IconCheckmark-CfdrAkp2.js";import"./Empty-Ddkzuy2E.js";import"./Image-BMFaJR4H.js";import"./Input-DO9B7b5M.js";import"./IconCheckmarkCircleFilled-vhCnGYex.js";import"./IconChevronLeft-B9ioQ9eO.js";import"./IconCaretDownFilled-Co6we-35.js";import"./extends-CF3RwP-h.js";import"./Tab-C10rILsw.js";import"./Badge-B82unf5K.js";const R=({isLoading:p,footerButtons:m,onClose:u,onSubmit:o,checkboxInfo:a,dataTestId:n=""})=>{const[c,d]=$.useState((a==null?void 0:a.isChecked)||!1),y=r.useCallback(()=>{o==null||o(c)},[o,c]);if(!m)return null;const{extraButton:b,confirm:t,cancel:f}=m;return e.jsxs("div",{className:"side-sheet__footer","data-test-id":n?`${n}-footer`:"",children:[a?e.jsx("div",{className:"side-sheet__footer_checkbox",children:e.jsx(K,{label:a.label,selectedValue:c,onClick:d,dataTestId:n?`${n}-checkbox`:""})}):null,e.jsxs("div",{className:"side-sheet__footer_buttons",children:[b?e.jsx(l,{size:"large",type:"secondary",...m.extraButton,className:"mr-12",dataTestId:n?`${n}-extra`:""}):null,e.jsx(l,{type:"secondary",size:"large",className:"mr-12",onClick:u,...f,dataTestId:n?`${n}-cancel`:""}),e.jsx(l,{type:"primary",size:"large",onClick:y,disabled:p,...t,dataTestId:n?`${n}-confirm`:""})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:""},footerButtons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  cancel: TButtonPropTypes
  confirm: TButtonPropTypes
  extraButton?: TButtonPropTypes
}`,signature:{properties:[{key:"cancel",value:{name:"TButtonPropTypes",required:!0}},{key:"confirm",value:{name:"TButtonPropTypes",required:!0}},{key:"extraButton",value:{name:"TButtonPropTypes",required:!1}}]}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(e?: TClickEventType) => void",signature:{arguments:[{type:{name:"TClickEventType"},name:"e"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(isSelected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isSelected"}],return:{name:"void"}}},description:""},checkboxInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string
  isChecked: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"isChecked",value:{name:"boolean",required:!0}}]}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const I=p=>{const{size:m="small",isLoading:u,isOpen:o,onClose:a,onSubmit:n,title:c,position:d="right",shouldRemoveCallback:y,className:b="",headerButtons:t,footerButtons:f,scrollToTopOptions:v,children:T,closeOnOutsideClick:q=!0,checkboxInfo:k,dataTestId:i=""}=p,[x,C]=r.useState(null),[P,s]=r.useState(!1),S=r.useRef(null);W(x,a,o&&q,r.useId(),y),z(o);const E=J();r.useEffect(()=>{var g;if(o&&v){const w=D=>{E(),o&&s(D.currentTarget.scrollTop>v.onPixel)};(g=S.current)==null||g.addEventListener("scroll",w)}o||O()},[o,v]);const O=r.useCallback(()=>{var g;s(!1),(g=S.current)==null||g.scrollTo({top:0,behavior:"smooth"})},[]),j=d==="left";return e.jsx(Y,{children:o?e.jsx(A.div,{className:"side-sheet","data-test-id":i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.1,delay:.3}},transition:{duration:.2},children:e.jsxs(A.div,{initial:j?{left:"-100%"}:{right:"-100%"},animate:j?{left:0}:{right:0},exit:{...j?{left:"-100%"}:{right:"-100%"},transition:{duration:.5}},transition:{duration:.5},className:F("side-sheet__container",`side-sheet__${d}`,`side-sheet__container--${m}`,b),"data-test-id":i?`${i}-container`:"",ref:C,children:[e.jsxs("div",{className:"side-sheet__header",children:[e.jsxs("div",{className:"side-sheet__header__left pr-16",children:[t!=null&&t.back?e.jsx(l,{size:"small",type:"tertiary",...t.back,className:"mr-8",dataTestId:i?`${i}-back`:""}):null,e.jsx(G,{className:"side-sheet__title",weight:"bolder",lineHeight:"large",size:"medium",dataTestId:i?`${i}-title`:"",children:c})]}),e.jsxs("div",{className:"side-sheet__header__right",children:[t!=null&&t.pin?e.jsx(l,{size:"small",type:"tertiary",...t.pin,className:"mr-8",dataTestId:i?`${i}-pin`:""}):null,t!=null&&t.close?e.jsx(l,{size:"small",type:"tertiary",...t.close,onClick:a,dataTestId:i?`${i}-close`:""}):e.jsx(l,{size:"small",type:"tertiary",iconProps:{Component:B},onClick:a,dataTestId:i?`${i}-close`:""})]}),P&&e.jsx(l,{size:"large",type:"secondary",iconProps:{Component:Q},className:`side-sheet__header__scroll-top side-sheet__header__scroll-top__${m}`,dataTestId:i?`${i}-scroll-top`:"",onClick:O})]}),e.jsx("div",{className:"side-sheet__content scrollbar scrollbar--vertical","data-test-id":i?`${i}-content`:"",ref:S,children:T}),e.jsx(R,{footerButtons:f,isLoading:u,onClose:a,onSubmit:n,checkboxInfo:k,dataTestId:i})]})}):null})};I.__docgenInfo={description:"",methods:[],displayName:"SideSheet",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},closeOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:""},shouldRemoveCallback:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large' | 'mobile'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"},{name:"literal",value:"'mobile'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(e?: TClickEventType | MouseEvent) => void",signature:{arguments:[{type:{name:"union",raw:"TClickEventType | MouseEvent",elements:[{name:"TClickEventType"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(isCheckboxSelected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isCheckboxSelected"}],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},footerButtons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  cancel: TButtonPropTypes
  confirm: TButtonPropTypes
  extraButton?: TButtonPropTypes
}`,signature:{properties:[{key:"cancel",value:{name:"TButtonPropTypes",required:!0}},{key:"confirm",value:{name:"TButtonPropTypes",required:!0}},{key:"extraButton",value:{name:"TButtonPropTypes",required:!1}}]}},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},headerButtons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  close?: TButtonPropTypes
  pin?: TButtonPropTypes
  back?: TButtonPropTypes
}`,signature:{properties:[{key:"close",value:{name:"TButtonPropTypes",required:!1}},{key:"pin",value:{name:"TButtonPropTypes",required:!1}},{key:"back",value:{name:"TButtonPropTypes",required:!1}}]}},description:""},scrollToTopOptions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  onPixel: number
}`,signature:{properties:[{key:"onPixel",value:{name:"number",required:!0}}]}},description:""},checkboxInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string
  isChecked: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"isChecked",value:{name:"boolean",required:!0}}]}},description:""}}};const mi={title:"Side Sheet",component:I,argTypes:{position:{options:["left","right"],control:{type:"radio"}}}},oe=Z({test:_().required("validation").nullable(),firstname:_().required("validation").nullable()}),ae={firstname:5},ne=[{value:1,label:"Armeniaaasdasdasdasdlkashdkjlashdkjasdkjashkdjhaskjdhdaskjdhaskjhdkajsdkjasdkjashdjkashdkjhaskdhaskjdhaskjdhaskjdhaskjhdkjas",meta:"AM"},{value:2,label:"Italy",meta:"IT"},{value:3,label:"France    France    France",meta:"FR"},{value:4,label:"Spain",meta:"SP"},{value:5,label:"Germany",meta:"De"},{value:6,label:"Australia",meta:"AU"},{value:7,label:"Hungary",meta:"HY"},{value:8,label:"Georgia",meta:"GE"},{value:9,label:"Brazil",meta:"BR"},{value:10,label:"Norway",meta:"NR"},{value:11,label:"Mexico",meta:"MC"}],re=[{value:"yerevan",label:"Yerevan"},{value:"rome",label:"Rome"},{value:"paris",label:"Paris"},{value:"aaaa",label:"iiii"}],le=[{title:"Countries",data:ne},{title:"Cities",data:re}],me=p=>{const[m,u]=r.useState(!1),[o,a]=r.useState(!1),n=()=>{u(!0)},[c,d]=r.useState(null),[y,b]=r.useState(!1),[t,f]=r.useState(!1),v=()=>a(!1),T=r.useRef(!1),q=()=>{a(!1),u(!1)},k=s=>{s==null||s.preventDefault(),s==null||s.stopPropagation(),T.current?a(!0):u(!1)},i=s=>{console.log(s),console.log("submit")},[x,C]=r.useState([]),P=(s,S)=>{C(s)};return e.jsxs("div",{children:[e.jsx("button",{onClick:n,children:"Open Side Sheet"}),e.jsx(I,{...p,size:"small",onClose:k,isOpen:m,shouldRemoveCallback:!1,onSubmit:i,scrollToTopOptions:{onPixel:200},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsxs(H,{onSubmit:s=>console.log("data",s),validationScheme:oe,initialValues:ae,children:[e.jsx(l,{buttonText:"show modal on outside click",onClick:()=>T.current=!0}),e.jsxs("div",{children:[e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"})]}),e.jsx(U,{isLoading:!1,label:"Select",options:le,placeHolder:"Select country",helperText:"To be filled in only for USA, Canada and European countries.",labelAddons:e.jsx(te,{size:"xsmall",type:"information",className:"ml-4"}),isGrouped:!0,isButtonSelect:!0,dropdownWidth:400,align:"right",maxSelectCount:3,selectedItems:x,setSelectedItems:P,labelRightIconComponent:()=>e.jsx(se,{size:"xsmall",className:"mr-4",onClick:s=>{s.preventDefault(),s.stopPropagation()}}),translations:{innerLabel:"Group name",clearAllLabel:"Clear All",selectAllLabel:"Select All",emptyListMainMessage:""}})]})}),e.jsx("div",{style:{height:2e3},children:e.jsx("div",{style:{position:"relative",width:"fit-content"},ref:d,children:e.jsx(l,{onClick:()=>f(!t),iconProps:{Component:ie}})})})]})}),e.jsx(V,{isOpen:o,onClose:v,onSubmit:q,closeOnOutsideClick:!1,buttonProps:{confirm:{buttonText:"Register",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}},children:"content"})]})},h=me.bind({});h.args={dataTestId:"side-sheet",title:"Side sheet title",headerButtons:{close:{iconProps:{Component:B}},back:{iconProps:{Component:X}},pin:{iconProps:{Component:ee}}},footerButtons:{confirm:{buttonText:"Save"},cancel:{buttonText:"Cancel"},extraButton:{buttonText:"Other action"}},checkboxInfo:{label:"Agree to terms",isChecked:!1}};var L,M,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenSheet = () => {
    setIsOpen(true);
  };
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const onModalOutsideClick = () => {
    setIsModalOpen(false);
  };
  const openModal = () => setIsModalOpen(true);
  const _isDirtyRef = useRef<boolean>(false);
  const onModalSubmit = () => {
    setIsModalOpen(false);
    setIsOpen(false);
  };
  const closeSideSheet = (e: TClickEventType | undefined | MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (_isDirtyRef.current) {
      setIsModalOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  const onSubmit = (isChecked: boolean) => {
    console.log(isChecked);
    console.log('submit');
  };
  const [selectedValues, setSelectedValues] = useState<TSelectedValue[]>([]);
  const set = (value: TSelectedValue[], isChecked: boolean) => {
    setSelectedValues(value);
  };
  return <div>
      <button onClick={handleOpenSheet}>Open Side Sheet</button>
      <_SideSheet {...args} size="small" onClose={closeSideSheet} isOpen={isOpen} shouldRemoveCallback={false} onSubmit={onSubmit} scrollToTopOptions={{
      onPixel: 200
    }}>
        <>
          <div>
            <FormContainer onSubmit={data => console.log('data', data)} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
              <Button buttonText={'show modal on outside click'} onClick={() => _isDirtyRef.current = true} />
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed
                  tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus
                  quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo
                  mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi?
                  Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis
                  eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed
                  tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus
                  quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo
                  mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi?
                  Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                  itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis
                  eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero
                  sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde
                  facere officiis possimus quidem fugiat animi? Possimus, cum non?
                </span>
              </div>
              <_MultiSelect isLoading={false} label="Select" options={OPTIONS_GROUPED} placeHolder="Select country" helperText="To be filled in only for USA, Canada and European countries." labelAddons={<IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />} isGrouped={true} isButtonSelect={true} dropdownWidth={400} align="right" maxSelectCount={3} selectedItems={selectedValues} setSelectedItems={set} labelRightIconComponent={() => <IconPerson size="xsmall" className="mr-4" onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
            }} />} translations={{
              innerLabel: 'Group name',
              clearAllLabel: 'Clear All',
              selectAllLabel: 'Select All',
              emptyListMainMessage: ''
            }} />
            </FormContainer>
          </div>

          <div style={{
          height: 2000
        }}>
            <div style={{
            position: 'relative',
            width: 'fit-content'
          }} ref={setRef}>
              <Button onClick={() => setOpen(!open)} iconProps={{
              Component: IconMore
            }} />
            </div>
          </div>
        </>
      </_SideSheet>

      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={onModalSubmit} closeOnOutsideClick={false} buttonProps={{
      confirm: {
        buttonText: 'Register',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }}>
        content
      </Modal>
    </div>;
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const ui=["SideSheet"];export{h as SideSheet,ui as __namedExportsOrder,mi as default};
