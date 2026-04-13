import{j as o}from"./jsx-runtime-DGMf18uz.js";import{r as b}from"./iframe-BxopgcHD.js";import{M,a as f}from"./Popover-Dxvpno7X.js";import{a as x}from"./IconArrowDownloadFilled-Chj9ffsN.js";import{S as T}from"./index-DvsGwf0b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-C94UHohc.js";import"./types-CUwOA7Bz.js";import"./helpers-Cn4U8KyO.js";import"./IconDismiss-RGNOT7sG.js";import"./Tooltip-biwhggso.js";import"./Text-B63QT2DE.js";import"./index-OTSHAAMO.js";import"./Button-DJarkLY9.js";import"./Link-Bj09wT3J.js";import"./NestedMenu-4oinRs4m.js";import"./CollapseGroup-TGnB0HSO.js";import"./Divider-CQypTrJo.js";import"./AnimatePresenceWrapper-CYqC1oSh.js";import"./IconChevronDown-C_ctPCOt.js";import"./IconChevronUp-DhPDj_0j.js";import"./IconChevronRight-Dzj-EODh.js";import"./AvatarGroup-DnKpfxN9.js";import"./DropzoneFileUpload-6n0w3_1G.js";import"./Label-C9pOCRih.js";import"./useFormProps-CVT6vkyp.js";import"./ErrorMessage-DkeSaz6t.js";import"./IconDynamicComponent-2ySArwvD.js";import"./Snackbar-DquC-mXq.js";import"./Alert-wtElZ0k-.js";import"./IconDismissFilled-D8btn9_u.js";import"./Progress-D8s2OEQo.js";import"./IconAdd-DCpW2p5-.js";import"./Checkbox-C0-sFEZs.js";import"./IconInfo-Be7EEdQ-.js";import"./IconCheckmark-8G9Q_WZT.js";import"./Empty-z4hUN1mv.js";import"./Image-CS_j9CfF.js";import"./Input-DPyFRosc.js";import"./IconCheckmarkCircleFilled-BUFO3ElU.js";import"./IconChevronLeft-BQPoDEEh.js";import"./IconCaretDownFilled-WCeABkXc.js";import"./extends-CF3RwP-h.js";import"./Tab-CpCsFrXV.js";import"./Badge-Ds3ci4NH.js";import"./IconMore-BaqM8ImT.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
