import{j as o}from"./jsx-runtime-BlHdFfbs.js";import{r as b}from"./iframe-CPNXeZQD.js";import{M,a as f}from"./Popover-Bd7XVUF8.js";import{a as x}from"./IconArrowDownloadFilled-_ZvBpOEX.js";import{S as T}from"./index-C71SVD2F.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BuomKUqM.js";import"./types-BFbCWV9V.js";import"./helpers-BGvLm9Ex.js";import"./IconDismiss-Cl0XOc6y.js";import"./Tooltip-DGcGBEvO.js";import"./Text-UZVrpgji.js";import"./index-xvMEpEQ_.js";import"./Button-JN4pHmAj.js";import"./Link-D3-x_yrK.js";import"./NestedMenu-9Ya15tz7.js";import"./CollapseGroup-BwQPwk0E.js";import"./Divider-DqFvMGuj.js";import"./AnimatePresenceWrapper-BjcFeZEn.js";import"./IconChevronDown-xBsg59KM.js";import"./IconChevronUp-Bqxf0Ta3.js";import"./IconChevronRight-Brs03ko2.js";import"./AvatarGroup-BZIwAWvR.js";import"./DropzoneFileUpload-DfMuueFt.js";import"./Label-DRQNhG0I.js";import"./useFormProps-DK_USs_r.js";import"./ErrorMessage-C_HkOBmb.js";import"./IconDynamicComponent-BWIne9Yl.js";import"./Snackbar-JXOvicmK.js";import"./Alert-Bq6lR--4.js";import"./IconDismissFilled-CZYqMp5N.js";import"./Progress-CvCgz1p2.js";import"./IconAdd-tvcSFNAF.js";import"./Checkbox-BiEOir9y.js";import"./IconInfo-DhLKROPg.js";import"./IconCheckmark-o1RU375K.js";import"./Empty-B-fyyjxa.js";import"./Image-C9U__ye5.js";import"./Input-BfM1wFvt.js";import"./IconCheckmarkCircleFilled-BgXagNY6.js";import"./IconChevronLeft-BXJMTiaz.js";import"./IconCaretDownFilled-9cZvgydT.js";import"./extends-CF3RwP-h.js";import"./Tab-DaYtJAxC.js";import"./Badge-Fj10O8x-.js";import"./IconMore-DJTuSH4W.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
