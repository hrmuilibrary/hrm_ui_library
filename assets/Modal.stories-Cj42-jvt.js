import{j as o}from"./jsx-runtime-DQocG_DU.js";import{r as b}from"./iframe-DohMLMgT.js";import{M,a as f}from"./Popover-BOKh1Cug.js";import{a as x}from"./IconArrowDownloadFilled-Daz2itSR.js";import{S as T}from"./index-DVuXh51b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-BXVFLrhS.js";import"./types-Ce_Xqsqm.js";import"./helpers-VjGXHpiu.js";import"./IconDismiss-CkGysSVs.js";import"./Tooltip-pT-JJzcU.js";import"./Text-B2QS4csO.js";import"./Button-C0wGFX0-.js";import"./Link-BFvLYgpp.js";import"./NestedMenu-B0jpvjLY.js";import"./index-By7FAOXe.js";import"./CollapseGroup-CYJYxx48.js";import"./Divider-DVdon9_d.js";import"./AnimatePresenceWrapper-DLtmSEp9.js";import"./IconChevronDown-DM2PYpqZ.js";import"./IconChevronUp-C7tSwshN.js";import"./IconChevronRight-DBA2J4AM.js";import"./AvatarGroup-CqRmaeK_.js";import"./DropzoneFileUpload-DByyHKsw.js";import"./Label-rZElN5VB.js";import"./useFormProps-B1OsadL3.js";import"./ErrorMessage-B81hUD6v.js";import"./IconDynamicComponent-wZoyePAq.js";import"./Snackbar-BrW_yJos.js";import"./Alert-BiFdZqxO.js";import"./IconDismissFilled-CdzHgjB3.js";import"./Progress-B0r2-7Ve.js";import"./IconAdd-NJQfnun1.js";import"./Checkbox-D_qd3ipe.js";import"./IconInfo-Ceg1OpA7.js";import"./IconCheckmark-eDgW_kNd.js";import"./Empty-DjWw8e7k.js";import"./Image-Cr4ABzur.js";import"./Input-BCBooegN.js";import"./IconCheckmarkCircleFilled-DostGmi5.js";import"./IconChevronLeft-pAoyhPuw.js";import"./IconCaretDownFilled-DanpHviB.js";import"./extends-CF3RwP-h.js";import"./Tab-DgpxasgM.js";import"./Badge-BE8rwm9D.js";import"./IconMore-Cj6U1U7k.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
