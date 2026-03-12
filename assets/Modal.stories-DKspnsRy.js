import{j as o}from"./jsx-runtime-Bu_ALF8p.js";import{r as b}from"./iframe-BB1NJQAI.js";import{M,a as f}from"./Popover-B3PN6YYf.js";import{a as x}from"./IconArrowDownloadFilled-SmDXt9t4.js";import{S as T}from"./index-BrL1cguY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-ChefNaU4.js";import"./types-DTzXgx9a.js";import"./helpers-B3DVZXmr.js";import"./IconDismiss-CvMEOUu2.js";import"./Tooltip-_rvudy_3.js";import"./Text-DT0qOwYD.js";import"./Button-CTf_FFJO.js";import"./Link-B4PYN49g.js";import"./NestedMenu-CSRGjBaq.js";import"./index-Db2o8h8F.js";import"./CollapseGroup-CN8QaNJa.js";import"./Divider-CIeFjtPb.js";import"./AnimatePresenceWrapper-8nEPLPyb.js";import"./IconChevronDown-CoBsNG8O.js";import"./IconChevronUp-_TDdrPYO.js";import"./IconChevronRight-boR5c4Bs.js";import"./AvatarGroup-Fqs2Laky.js";import"./DropzoneFileUpload-Fx0NFjzc.js";import"./Label-DLpS5inS.js";import"./useFormProps-D8jyCiMY.js";import"./ErrorMessage-BiDOt-u8.js";import"./IconDynamicComponent-yZgRfUGb.js";import"./Snackbar-DHa6zAGI.js";import"./Alert-Dnk4LFbG.js";import"./IconDismissFilled-CLNppIBn.js";import"./Progress-COOYi71m.js";import"./IconAdd-oo-wJ3XN.js";import"./Checkbox-CtQ88620.js";import"./IconInfo-CTTdYzE6.js";import"./IconCheckmark-DiwRn7m-.js";import"./Empty-BaY_0_Kx.js";import"./Image-Bg9i1WWC.js";import"./Input-DC60Fcr8.js";import"./IconCheckmarkCircleFilled-BTUYk0NV.js";import"./IconChevronLeft-BclLiCLB.js";import"./IconCaretDownFilled-BKsQJY5S.js";import"./extends-CF3RwP-h.js";import"./Tab-Dpm6FE-8.js";import"./Badge-BCbUC6hy.js";import"./IconMore-ntI_O4Fp.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
