import{j as o}from"./jsx-runtime-BIQybnMq.js";import{r as b}from"./iframe-DbnnnWY-.js";import{M,a as f}from"./Popover-CRsA_bPx.js";import{a as x}from"./IconArrowDownloadFilled-n8ftz1hd.js";import{S as T}from"./index-Bnix-Ry9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-D12A_WaC.js";import"./types-3dCisorJ.js";import"./helpers-Bzb3uc2Y.js";import"./IconDismiss-u5Ei1Bxc.js";import"./Tooltip-zPdjbHtu.js";import"./Text-CV4vwRLK.js";import"./Button-DILmnUEh.js";import"./Link-CTRcObik.js";import"./NestedMenu-CX7sPrv9.js";import"./index-DY9e7VHg.js";import"./CollapseGroup-b7Gwouil.js";import"./Divider-Co_HkttT.js";import"./AnimatePresenceWrapper-C0Hs73Ne.js";import"./IconChevronDown-CwkCnr3a.js";import"./IconChevronUp-CCVhFikH.js";import"./IconChevronRight-Cs-0HCJ7.js";import"./AvatarGroup-9AiNw8aW.js";import"./DropzoneFileUpload-lDeu5LdC.js";import"./Label-CSBPWmHI.js";import"./useFormProps-58u15XfS.js";import"./ErrorMessage-CAhpJ4_m.js";import"./IconDynamicComponent-DTRS-6LY.js";import"./Snackbar-CNuruYLc.js";import"./Alert-5z7d8Xcu.js";import"./IconDismissFilled-CozUMxDd.js";import"./Progress-D0j1QvD1.js";import"./IconAdd-DkVpHr_E.js";import"./Checkbox-Br4-7Msn.js";import"./IconInfo-YY-i76To.js";import"./IconCheckmark-gqAXV24a.js";import"./Empty-B8LHDP8J.js";import"./Image-M5iEFe2C.js";import"./Input-CIrmkIjy.js";import"./IconCheckmarkCircleFilled-CfVwKO05.js";import"./IconChevronLeft-cf_8OKri.js";import"./IconCaretDownFilled-Be_2nAXl.js";import"./extends-CF3RwP-h.js";import"./Tab-DH50Btmb.js";import"./Badge-CdEvz-p9.js";import"./IconMore-BJQ7YgDQ.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
