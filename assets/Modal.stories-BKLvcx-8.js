import{j as o}from"./jsx-runtime-jFMHOQiv.js";import{r as b}from"./iframe-j8d_chXW.js";import{M,a as f}from"./Popover-CDF5JkKU.js";import{a as x}from"./IconArrowDownloadFilled-C1C5_cv8.js";import{S as T}from"./index-B0r7oT10.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-Bh-szKX2.js";import"./types-fk_rOSif.js";import"./helpers-B82z9bby.js";import"./IconDismiss-Byffu1qp.js";import"./Tooltip-C9QnFbVr.js";import"./Text-cBKcNHHC.js";import"./Button-DkgGcymV.js";import"./Link-CLXx25Wc.js";import"./NestedMenu-Cg2GXbIk.js";import"./index-BQq4c5CU.js";import"./CollapseGroup-9FFaTXPN.js";import"./Divider-DuX9IKMH.js";import"./AnimatePresenceWrapper-R_5tjcUF.js";import"./IconChevronDown-BKIixDfX.js";import"./IconChevronUp-DVvmdbc3.js";import"./IconChevronRight-DzohKb1-.js";import"./AvatarGroup-CC00O41r.js";import"./DropzoneFileUpload-B6W6aq20.js";import"./Label-DpPEgIh3.js";import"./useFormProps-B3EqgvBJ.js";import"./ErrorMessage-4WejSJjb.js";import"./IconDynamicComponent-jW9BCE90.js";import"./Snackbar-PpAtHS9f.js";import"./Alert-BCGUxK7g.js";import"./IconDismissFilled-BrBQht9m.js";import"./Progress-DI2n3cdn.js";import"./IconAdd-DlZXXra7.js";import"./Checkbox-DMlcil5K.js";import"./IconInfo-d3aYeuy5.js";import"./IconCheckmark-CoFzokoV.js";import"./Empty-C58a2hZE.js";import"./Image-DtqsiMcJ.js";import"./Input-jJY2stcP.js";import"./IconCheckmarkCircleFilled-C15eMx2O.js";import"./IconChevronLeft-CyS0R3bA.js";import"./IconCaretDownFilled-CW4991Ue.js";import"./extends-CF3RwP-h.js";import"./Tab-CdHCFoxA.js";import"./Badge-CdSssW1A.js";import"./IconMore-Bs9T0kyR.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
