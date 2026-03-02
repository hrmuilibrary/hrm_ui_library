import{j as o}from"./jsx-runtime-DaLC6nBs.js";import{r as b}from"./iframe-BvvmSemO.js";import{M,a as f}from"./Popover-Bz2y6FFK.js";import{a as x}from"./IconArrowDownloadFilled-BcgTTAhw.js";import{S as T}from"./index-CywAQAGg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-r8nk0Inf.js";import"./types--HW1TU83.js";import"./helpers-8_i-bo7d.js";import"./IconDismiss-DGDF-8tJ.js";import"./Tooltip-DmErFFHO.js";import"./Text-DefunVDP.js";import"./Button-BhplgRrt.js";import"./Link-C3sNpXSc.js";import"./NestedMenu-D8QPODIX.js";import"./index-DBkx0a4z.js";import"./CollapseGroup-dFn1AZ1c.js";import"./Divider-CvSZiMj9.js";import"./AnimatePresenceWrapper-DMz9bZ3n.js";import"./IconChevronDown-DdkGEdiZ.js";import"./IconChevronUp-Ch3pM72L.js";import"./IconChevronRight-BwhIigs9.js";import"./AvatarGroup-DyeWgunS.js";import"./DropzoneFileUpload-DgIdxgXv.js";import"./Label-AbOCkMFt.js";import"./useFormProps-Dd8stXRo.js";import"./ErrorMessage-BEjmpnX6.js";import"./IconDynamicComponent-BLsdvZIk.js";import"./Snackbar-Ca4hvLFI.js";import"./Alert-br9TULiu.js";import"./IconDismissFilled-CmkbRQrS.js";import"./Progress-C-I1IqD1.js";import"./IconAdd-Cuacvkl8.js";import"./Checkbox-CHg650yf.js";import"./IconInfo-CJUwrubW.js";import"./IconCheckmark-BnnEOLYT.js";import"./Empty-RVPMcQe5.js";import"./Image-DuWkgn6g.js";import"./Input-CgFwoLiI.js";import"./IconCheckmarkCircleFilled-CYBvA84p.js";import"./IconChevronLeft-7YiChNku.js";import"./IconCaretDownFilled-Dv3MC4cb.js";import"./extends-CF3RwP-h.js";import"./Tab-DVrwrx2f.js";import"./Badge-BmMjaZrd.js";import"./IconMore-ChvmTSn-.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
