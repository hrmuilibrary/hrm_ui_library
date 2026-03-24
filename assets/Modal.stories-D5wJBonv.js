import{j as o}from"./jsx-runtime-CXGOtVTx.js";import{r as b}from"./iframe-DWMiYP_w.js";import{M,a as f}from"./Popover-BrMASA12.js";import{a as x}from"./IconArrowDownloadFilled-DeU_cENa.js";import{S as T}from"./index-HXStZsTH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-DHC8ksM_.js";import"./types-BDdG7jR_.js";import"./helpers-BkfYO7hV.js";import"./IconDismiss-DqOVmjgP.js";import"./Tooltip-CMOFyQDx.js";import"./Text-vzw9yN9Q.js";import"./Button-DAfneLsq.js";import"./Link-C7haWBt-.js";import"./NestedMenu-BdcrjpzU.js";import"./index-CyOmgsHL.js";import"./CollapseGroup-CPGWz_Oa.js";import"./Divider-CASwjxEi.js";import"./AnimatePresenceWrapper-C3QiHmBD.js";import"./IconChevronDown-C3F2Gywn.js";import"./IconChevronUp-D6m0jq_9.js";import"./IconChevronRight-BkqxWA4Y.js";import"./AvatarGroup-DgSWsayl.js";import"./DropzoneFileUpload-qRXGHUHz.js";import"./Label-DxT7DAa_.js";import"./useFormProps-DWoc6nES.js";import"./ErrorMessage-PgUDJOqQ.js";import"./IconDynamicComponent-DAuz8Wep.js";import"./Snackbar-CeIbipqq.js";import"./Alert-mJKhfAwT.js";import"./IconDismissFilled-BdQeewO2.js";import"./Progress-CQbIKlaY.js";import"./IconAdd-BsBNhF2w.js";import"./Checkbox-CLcSwWV3.js";import"./IconInfo-EcNoypFf.js";import"./IconCheckmark-0_rFbR2V.js";import"./Empty-B-d_0SQ-.js";import"./Image-CQ74rgs4.js";import"./Input-YRGR9fbC.js";import"./IconCheckmarkCircleFilled-DN5IISFI.js";import"./IconChevronLeft-BcGfVftC.js";import"./IconCaretDownFilled-FoXK2RdN.js";import"./extends-CF3RwP-h.js";import"./Tab-1dMqKxbZ.js";import"./Badge-oR9iW674.js";import"./IconMore-EDIN4LVf.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
