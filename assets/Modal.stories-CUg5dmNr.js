import{j as o}from"./jsx-runtime-CFhu-JeV.js";import{r as b}from"./iframe-DQtAU-_B.js";import{M,a as f}from"./Popover-Bq5us6Yd.js";import{a as x}from"./IconArrowDownloadFilled-DhlBkmEw.js";import{S as T}from"./index-dyH9vk84.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-D-9rOKPC.js";import"./types-DdTvgI_g.js";import"./helpers-DA3h6OxS.js";import"./IconDismiss-pf2dowYZ.js";import"./Tooltip-D541dn1S.js";import"./Text-Cv6G_wdz.js";import"./Button-Dl3PRofE.js";import"./Link-CuvKOss-.js";import"./NestedMenu-_7v9Uf69.js";import"./index-9xzvwq9c.js";import"./CollapseGroup-D2spcx4h.js";import"./Divider-nGmW2U1-.js";import"./AnimatePresenceWrapper-DctS3uIO.js";import"./IconChevronDown-C5a45CrW.js";import"./IconChevronUp-Cx5L0k-U.js";import"./IconChevronRight-QUcKBJtq.js";import"./AvatarGroup-Cex8WJGm.js";import"./DropzoneFileUpload-CDhPxm52.js";import"./Label-BniV-b7a.js";import"./useFormProps-2rVL4WM6.js";import"./ErrorMessage-D9pthg9V.js";import"./IconDynamicComponent-BSQNhMP-.js";import"./Snackbar-BrJFarv2.js";import"./Alert-DS6J5RfG.js";import"./IconDismissFilled-BcKsAqSn.js";import"./Progress-Dvc0wHOc.js";import"./IconAdd-ZyQHeESA.js";import"./Checkbox-ZdZfCp59.js";import"./IconInfo-BTUFM5AO.js";import"./IconCheckmark-Bs_XxgVJ.js";import"./Empty-FOIJs0Rh.js";import"./Image-BEllqcpM.js";import"./Input-CN5Kwz1E.js";import"./IconCheckmarkCircleFilled-DqrEDd6I.js";import"./IconChevronLeft-ByePoNhO.js";import"./IconCaretDownFilled-p8zUCG8x.js";import"./extends-CF3RwP-h.js";import"./Tab-C8Utlqwx.js";import"./Badge-Dnu-0Y2w.js";import"./IconMore-CFDe60j6.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
