import{j as o}from"./jsx-runtime-D2jtCHOi.js";import{r as b}from"./iframe-BfwIK1ui.js";import{M,a as f}from"./Popover-DHKrnluu.js";import{a as x}from"./IconArrowDownloadFilled-Dyb_uyWV.js";import{S as T}from"./index-CbnhYHI4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-B_sF6Scw.js";import"./types-CgG8BAf6.js";import"./helpers-ByjcxY9i.js";import"./IconDismiss-BL5cd890.js";import"./Tooltip-COoKIpnB.js";import"./Text-C-olX5yF.js";import"./Button-8jAsoz4G.js";import"./Link-DLKVUDag.js";import"./NestedMenu-Boyzj0qd.js";import"./index-3yZ5Xhc7.js";import"./CollapseGroup-DXHjNC3c.js";import"./Divider-CdONYl79.js";import"./AnimatePresenceWrapper-DEuETPZt.js";import"./IconChevronDown-gevNUJ6X.js";import"./IconChevronUp-R01n71Fa.js";import"./IconChevronRight-3kYQfVX5.js";import"./AvatarGroup-BB4nbNBL.js";import"./DropzoneFileUpload-9ZdzBcbG.js";import"./Label-CzLyciBl.js";import"./useFormProps-BQYq2Dw9.js";import"./ErrorMessage-CyfdQqsC.js";import"./IconDynamicComponent-uWvTMi_Q.js";import"./Snackbar-CLJx7VTH.js";import"./Alert-Cc43fRj-.js";import"./IconDismissFilled-BKE2IGVh.js";import"./Progress-CyeACkoR.js";import"./IconAdd-CACU8M3x.js";import"./Checkbox-C6h5pU_V.js";import"./IconInfo-BKsEN15S.js";import"./IconCheckmark-BwSIL4_y.js";import"./Empty-vSz7QfO1.js";import"./Image-BwgnVSGu.js";import"./Input-Bd-wmOg1.js";import"./IconCheckmarkCircleFilled-yCUomulb.js";import"./IconChevronLeft-DbqN_KGN.js";import"./IconCaretDownFilled-DXC5vpku.js";import"./extends-CF3RwP-h.js";import"./Tab-DyjDD6oq.js";import"./Badge-C01fN_1K.js";import"./IconMore-BnZtkwfq.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
