import{j as o}from"./jsx-runtime-Q5-DiG6u.js";import{r as b}from"./iframe-BBUYj7ZT.js";import{M,a as f}from"./Popover-Do26jeop.js";import{a as x}from"./IconArrowDownloadFilled-gDuFgWg7.js";import{S as T}from"./index-DBiswCJY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-DEwYHVmm.js";import"./types-Cw6t2Ei8.js";import"./helpers-BDkZEH5P.js";import"./IconDismiss-C9pSG2Co.js";import"./Tooltip-C3sz6z6D.js";import"./Text-CjbCI6fB.js";import"./Button-fqGs5a32.js";import"./Link-Br13RKiF.js";import"./NestedMenu-D8FvHqa_.js";import"./index-DotBscbq.js";import"./CollapseGroup-7KFItPNP.js";import"./Divider-7xshQskL.js";import"./AnimatePresenceWrapper-Bc5uWO5n.js";import"./IconChevronDown-D_iZ8BiH.js";import"./IconChevronUp-DAxTaMxG.js";import"./IconChevronRight-D6tVulu9.js";import"./AvatarGroup-CIPI2VT3.js";import"./DropzoneFileUpload-BkV7nxBB.js";import"./Label-BddqEAIL.js";import"./useFormProps-CKpWdKZV.js";import"./ErrorMessage-Ug8uot8S.js";import"./IconDynamicComponent-CQ2jGYfb.js";import"./Snackbar-C_aeHJot.js";import"./Alert-yfFDKST_.js";import"./IconDismissFilled-lvujuGxd.js";import"./Progress-B6i2yMJ2.js";import"./IconAdd-DBQQf88s.js";import"./Checkbox-BUUz4F9U.js";import"./IconInfo-WymG3m07.js";import"./IconCheckmark-WoIpaAzH.js";import"./Empty-BJC5G7g-.js";import"./Image-BSLVHxqM.js";import"./Input-C0VjQEqS.js";import"./IconCheckmarkCircleFilled-BNLIxrfs.js";import"./IconChevronLeft-D6X3qrMB.js";import"./IconCaretDownFilled-BtCvtnBZ.js";import"./extends-CF3RwP-h.js";import"./Tab-BbGlLRDG.js";import"./Badge-VxRQP1dQ.js";import"./IconMore-HrZ2hvFz.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
