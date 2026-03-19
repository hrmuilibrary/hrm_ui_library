import{j as o}from"./jsx-runtime-swoB_UH8.js";import{r as b}from"./iframe-BOVbyeQX.js";import{M,a as f}from"./Popover-DRkxLNYE.js";import{a as x}from"./IconArrowDownloadFilled-N6F6isR7.js";import{S as T}from"./index-B4I6x71k.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-K21i-UZe.js";import"./types-B3Y0s562.js";import"./helpers-DcbC4fGe.js";import"./IconDismiss-CgiDmL-0.js";import"./Tooltip-BjbarA9B.js";import"./Text-U13ArU1Z.js";import"./Button-BCCG1XEW.js";import"./Link-BRJ6ho3v.js";import"./NestedMenu-UW1Ofh-5.js";import"./index-C0B3Z3o6.js";import"./CollapseGroup-_cQMh868.js";import"./Divider-D7t9z2FE.js";import"./AnimatePresenceWrapper-BFI5Sd3N.js";import"./IconChevronDown-CYGX1xHv.js";import"./IconChevronUp-D76sI7qu.js";import"./IconChevronRight-BAhcSiiz.js";import"./AvatarGroup-DjNEK8XY.js";import"./DropzoneFileUpload-CcDEQCgz.js";import"./Label-D9k15P0o.js";import"./useFormProps-Cc3_xUcI.js";import"./ErrorMessage-DVspfZNK.js";import"./IconDynamicComponent-BUEqk-Pm.js";import"./Snackbar-swfV1gsh.js";import"./Alert-BRFt722J.js";import"./IconDismissFilled-g1IEcdrX.js";import"./Progress-DM79Gc_n.js";import"./IconAdd-C6MsMlee.js";import"./Checkbox-BNvKnt3q.js";import"./IconInfo-B3BJiYU3.js";import"./IconCheckmark-BDJ3lJJX.js";import"./Empty-BBaoshoA.js";import"./Image-63XzSQDn.js";import"./Input-tG_Zudzi.js";import"./IconCheckmarkCircleFilled-0frm8LsB.js";import"./IconChevronLeft-D0obpN1T.js";import"./IconCaretDownFilled-CWRcq-CQ.js";import"./extends-CF3RwP-h.js";import"./Tab-D-VfiRzs.js";import"./Badge-tc1bJTgL.js";import"./IconMore-CVT2isps.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
