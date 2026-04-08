import{j as o}from"./jsx-runtime-f4W9F4p-.js";import{r as b}from"./iframe-BKYlKyI2.js";import{M,a as f}from"./Popover-DgTz9DGJ.js";import{a as x}from"./IconArrowDownloadFilled-CzpnkYS5.js";import{S as T}from"./index-BcGpuyP4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-DrPTCK4H.js";import"./types-By8Py-lx.js";import"./helpers-BrDgkfbG.js";import"./IconDismiss-C8N8hd4z.js";import"./Tooltip-DCgOp9oq.js";import"./Text-BaBfS14w.js";import"./Button-DC7__7_H.js";import"./Link-DIcCdqcp.js";import"./NestedMenu-CCPKyCQ6.js";import"./index-CYoGDo1s.js";import"./CollapseGroup-CZA9ip7U.js";import"./Divider-Bo3hOeqj.js";import"./AnimatePresenceWrapper-BLi3mM70.js";import"./IconChevronDown-CjCKOUH1.js";import"./IconChevronUp-Baff_IHn.js";import"./IconChevronRight-CPMcy9o2.js";import"./AvatarGroup-ccyekno3.js";import"./DropzoneFileUpload-BNiSXRJG.js";import"./Label-DudouxP4.js";import"./useFormProps-CNZjDzoX.js";import"./ErrorMessage-SoAMfuiJ.js";import"./IconDynamicComponent-7RVpD5Sh.js";import"./Snackbar-bY_LlQHV.js";import"./Alert-i7cY_g_A.js";import"./IconDismissFilled-zuzCing3.js";import"./Progress-DoGv4VJJ.js";import"./IconAdd-DCSquBKY.js";import"./Checkbox-BjImivQe.js";import"./IconInfo-DYN2DwjR.js";import"./IconCheckmark-CPHNnevw.js";import"./Empty-CLtZFDzZ.js";import"./Image-C9h97s8c.js";import"./Input-ybJ6p6WF.js";import"./IconCheckmarkCircleFilled-DAl-XcUG.js";import"./IconChevronLeft-njMumPXs.js";import"./IconCaretDownFilled-BBwXjlWQ.js";import"./extends-CF3RwP-h.js";import"./Tab-DYllXtOB.js";import"./Badge-Ck-Lryl8.js";import"./IconMore-BXPSTVaE.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
