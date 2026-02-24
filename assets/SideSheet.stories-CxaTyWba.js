import{j as e}from"./jsx-runtime-Dad0Pt4t.js";import{R as D,r as n}from"./iframe-CmGV6xoK.js";import{B as a}from"./Button-DbBZD8p2.js";import{b as z,c as V,M as F}from"./Popover-BGNtKZ-u.js";import{F as G}from"./FormContainer-BSkUGLbA.js";import{M as H}from"./index-BDPkhOe7.js";import{c as U}from"./index-CmL5Y0ic.js";import"./types-CFsqkMqD.js";import{A as $,m as A}from"./AnimatePresenceWrapper-DM0Tp5aj.js";import{T as W}from"./Text-DP1ffZD3.js";import{u as Y}from"./useDispatchEventOnScroll-CwOalOJS.js";import{C as J}from"./Checkbox-BdHLKVT5.js";import{I as K,b as Q}from"./IconCaretUp-CIHmFsPa.js";import{I as B}from"./IconDismissFilled-Cvr4n4Mr.js";import{b as X,a as _}from"./index.esm-bIRXCF36.js";import{c as Z}from"./IconArrowDownloadFilled-C0lK5ilm.js";import{I as ee}from"./IconMore-BTMoJqQi.js";import{I as ie}from"./IconPerson-BNkqKj2K.js";import{I as se}from"./IconInfo-CK6vxSv8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./IconDismiss-CAV4zZ-5.js";import"./Tooltip-B8X2zOYN.js";import"./helpers-BuzDaASc.js";import"./Link-BEDsvzFi.js";import"./NestedMenu-BV3lU8o1.js";import"./index-D4bjqLnt.js";import"./CollapseGroup-9eLyq47j.js";import"./Divider-3LRuQ1JM.js";import"./IconChevronDown-G26SgSgE.js";import"./IconChevronUp-CTeh0Qct.js";import"./IconChevronRight-BRKHx9Gt.js";import"./AvatarGroup-A9JuLHU4.js";import"./DropzoneFileUpload-C4xc2Y5z.js";import"./Label-D6_6GgrR.js";import"./useFormProps-CcFeurmF.js";import"./ErrorMessage-BRMog3E2.js";import"./IconDynamicComponent-w65LUGiU.js";import"./Snackbar-PDFnAI7j.js";import"./Alert-DGOym6vj.js";import"./Progress-CPdSZJzj.js";import"./IconAdd-DBWnU8eu.js";import"./IconCheckmark-CwsFZsyU.js";import"./Empty-Dr434Dij.js";import"./Image-DRbMXcs_.js";import"./Input-tWpmSUV7.js";import"./IconCheckmarkCircleFilled-_9kol15F.js";import"./IconChevronLeft-t7cKshIO.js";import"./IconCaretDownFilled-CvlG-AtZ.js";import"./extends-CF3RwP-h.js";import"./Tab-BQIGrYUG.js";import"./Badge-CY_CkEa9.js";const R=({isLoading:c,footerButtons:r,onClose:l,onSubmit:t,checkboxInfo:o})=>{const[m,v]=D.useState((o==null?void 0:o.isChecked)||!1),u=n.useCallback(()=>{t==null||t(m)},[t,m]);if(!r)return null;const{extraButton:g,confirm:h,cancel:s}=r;return e.jsxs("div",{className:"side-sheet__footer",children:[o?e.jsx("div",{className:"side-sheet__footer_checkbox",children:e.jsx(J,{label:o.label,selectedValue:m,onClick:v})}):null,e.jsxs("div",{className:"side-sheet__footer_buttons",children:[g?e.jsx(a,{size:"large",type:"secondary",...r.extraButton,className:"mr-12"}):null,e.jsx(a,{type:"secondary",size:"large",className:"mr-12",onClick:l,...s}),e.jsx(a,{type:"primary",size:"large",onClick:u,disabled:c,...h})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:""},footerButtons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  cancel: TButtonPropTypes
  confirm: TButtonPropTypes
  extraButton?: TButtonPropTypes
}`,signature:{properties:[{key:"cancel",value:{name:"TButtonPropTypes",required:!0}},{key:"confirm",value:{name:"TButtonPropTypes",required:!0}},{key:"extraButton",value:{name:"TButtonPropTypes",required:!1}}]}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(e?: TClickEventType) => void",signature:{arguments:[{type:{name:"TClickEventType"},name:"e"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(isSelected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isSelected"}],return:{name:"void"}}},description:""},checkboxInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string
  isChecked: boolean
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"isChecked",value:{name:"boolean",required:!0}}]}},description:""}}};const j=c=>{const{size:r="small",isLoading:l,isOpen:t,onClose:o,onSubmit:m,title:v,position:u="right",shouldRemoveCallback:g,className:h="",headerButtons:s,footerButtons:T,scrollToTopOptions:d,children:y,closeOnOutsideClick:S=!0,checkboxInfo:q}=c,[k,C]=n.useState(null),[x,b]=n.useState(!1),i=n.useRef(null);z(k,o,t&&S,n.useId(),g),V(t);const O=Y();n.useEffect(()=>{var p;if(t&&d){const E=w=>{O(),t&&b(w.currentTarget.scrollTop>d.onPixel)};(p=i.current)==null||p.addEventListener("scroll",E)}t||I()},[t,d]);const I=n.useCallback(()=>{var p;b(!1),(p=i.current)==null||p.scrollTo({top:0,behavior:"smooth"})},[]),P=u==="left";return e.jsx($,{children:t?e.jsx(A.div,{className:"side-sheet",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.1,delay:.3}},transition:{duration:.2},children:e.jsxs(A.div,{initial:P?{left:"-100%"}:{right:"-100%"},animate:P?{left:0}:{right:0},exit:{...P?{left:"-100%"}:{right:"-100%"},transition:{duration:.5}},transition:{duration:.5},className:U("side-sheet__container",`side-sheet__${u}`,`side-sheet__container--${r}`,h),ref:C,children:[e.jsxs("div",{className:"side-sheet__header",children:[e.jsxs("div",{className:"side-sheet__header__left pr-16",children:[s!=null&&s.back?e.jsx(a,{size:"small",type:"tertiary",...s.back,className:"mr-8"}):null,e.jsx(W,{className:"side-sheet__title",weight:"bolder",lineHeight:"large",size:"medium",children:v})]}),e.jsxs("div",{className:"side-sheet__header__right",children:[s!=null&&s.pin?e.jsx(a,{size:"small",type:"tertiary",...s.pin,className:"mr-8"}):null,s!=null&&s.close?e.jsx(a,{size:"small",type:"tertiary",...s.close,onClick:o}):e.jsx(a,{size:"small",type:"tertiary",iconProps:{Component:B},onClick:o})]}),x&&e.jsx(a,{size:"large",type:"secondary",iconProps:{Component:K},className:`side-sheet__header__scroll-top side-sheet__header__scroll-top__${r}`,onClick:I})]}),e.jsx("div",{className:"side-sheet__content scrollbar scrollbar--vertical",ref:i,children:y}),e.jsx(R,{footerButtons:T,isLoading:l,onClose:o,onSubmit:m,checkboxInfo:q})]})}):null})};j.__docgenInfo={description:"",methods:[],displayName:"SideSheet",props:{closeOnOutsideClick:{required:!1,tsType:{name:"boolean"},description:""},shouldRemoveCallback:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large' | 'mobile'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"},{name:"literal",value:"'mobile'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(e?: TClickEventType | MouseEvent) => void",signature:{arguments:[{type:{name:"union",raw:"TClickEventType | MouseEvent",elements:[{name:"TClickEventType"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(isCheckboxSelected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isCheckboxSelected"}],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:"'right' | 'left'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},footerButtons:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"isChecked",value:{name:"boolean",required:!0}}]}},description:""}}};const ri={title:"Side Sheet",component:j,argTypes:{position:{options:["left","right"],control:{type:"radio"}}}},te=X({test:_().required("validation").nullable(),firstname:_().required("validation").nullable()}),oe={firstname:5},ne=[{value:1,label:"Armeniaaasdasdasdasdlkashdkjlashdkjasdkjashkdjhaskjdhdaskjdhaskjhdkajsdkjasdkjashdjkashdkjhaskdhaskjdhaskjdhaskjdhaskjhdkjas",meta:"AM"},{value:2,label:"Italy",meta:"IT"},{value:3,label:"France    France    France",meta:"FR"},{value:4,label:"Spain",meta:"SP"},{value:5,label:"Germany",meta:"De"},{value:6,label:"Australia",meta:"AU"},{value:7,label:"Hungary",meta:"HY"},{value:8,label:"Georgia",meta:"GE"},{value:9,label:"Brazil",meta:"BR"},{value:10,label:"Norway",meta:"NR"},{value:11,label:"Mexico",meta:"MC"}],ae=[{value:"yerevan",label:"Yerevan"},{value:"rome",label:"Rome"},{value:"paris",label:"Paris"},{value:"aaaa",label:"iiii"}],re=[{title:"Countries",data:ne},{title:"Cities",data:ae}],le=c=>{const[r,l]=n.useState(!1),[t,o]=n.useState(!1),m=()=>{l(!0)},[v,u]=n.useState(null),[g,h]=n.useState(!1),[s,T]=n.useState(!1),d=()=>o(!1),y=n.useRef(!1),S=()=>{o(!1),l(!1)},q=i=>{i==null||i.preventDefault(),i==null||i.stopPropagation(),y.current?o(!0):l(!1)},k=i=>{console.log(i),console.log("submit")},[C,x]=n.useState([]),b=(i,O)=>{x(i)};return e.jsxs("div",{children:[e.jsx("button",{onClick:m,children:"Open Side Sheet"}),e.jsx(j,{...c,size:"small",onClose:q,isOpen:r,shouldRemoveCallback:!1,onSubmit:k,scrollToTopOptions:{onPixel:200},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsxs(G,{onSubmit:i=>console.log("data",i),validationScheme:te,initialValues:oe,children:[e.jsx(a,{buttonText:"show modal on outside click",onClick:()=>y.current=!0}),e.jsxs("div",{children:[e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"}),e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet itaque vero sapiente rerum sed tempore assumenda, illo mollitia perferendis eveniet unde facere officiis possimus quidem fugiat animi? Possimus, cum non?"})]}),e.jsx(H,{isLoading:!1,label:"Select",options:re,placeHolder:"Select country",helperText:"To be filled in only for USA, Canada and European countries.",labelAddons:e.jsx(se,{size:"xsmall",type:"information",className:"ml-4"}),isGrouped:!0,isButtonSelect:!0,dropdownWidth:400,align:"right",maxSelectCount:3,selectedItems:C,setSelectedItems:b,labelRightIconComponent:()=>e.jsx(ie,{size:"xsmall",className:"mr-4",onClick:i=>{i.preventDefault(),i.stopPropagation()}}),translations:{innerLabel:"Group name",clearAllLabel:"Clear All",selectAllLabel:"Select All",emptyListMainMessage:""}})]})}),e.jsx("div",{style:{height:2e3},children:e.jsx("div",{style:{position:"relative",width:"fit-content"},ref:u,children:e.jsx(a,{onClick:()=>T(!s),iconProps:{Component:ee}})})})]})}),e.jsx(F,{isOpen:t,onClose:d,onSubmit:S,closeOnOutsideClick:!1,buttonProps:{confirm:{buttonText:"Register",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}},children:"content"})]})},f=le.bind({});f.args={title:"Side sheet title",headerButtons:{close:{iconProps:{Component:B}},back:{iconProps:{Component:Q}},pin:{iconProps:{Component:Z}}},footerButtons:{confirm:{buttonText:"Save"},cancel:{buttonText:"Cancel"},extraButton:{buttonText:"Other action"}},checkboxInfo:{label:"Agree to terms",isChecked:!1}};var L,M,N;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const li=["SideSheet"];export{f as SideSheet,li as __namedExportsOrder,ri as default};
