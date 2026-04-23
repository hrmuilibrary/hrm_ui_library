import{j as o}from"./jsx-runtime-DyIpy8Yc.js";import{r as b}from"./iframe-DZvB0qs9.js";import{M,a as f}from"./Popover-B19GG2ff.js";import{a as x}from"./IconArrowDownloadFilled-ZNwLTZ3L.js";import{S as T}from"./index-DnRVMdbS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-Cu6n4AVG.js";import"./types-Be42hUOW.js";import"./helpers-Dw1_b3or.js";import"./IconDismiss-DZBXDVfp.js";import"./Tooltip-8P995OuL.js";import"./Text-CDQhGwat.js";import"./index-BPjGBHMf.js";import"./Button-CrlcZ-C4.js";import"./Link-B5MKs1lY.js";import"./NestedMenu-DxXcxm36.js";import"./CollapseGroup-DCyAAdF7.js";import"./Divider-ByQzpDWN.js";import"./AnimatePresenceWrapper-BjHuWXIP.js";import"./IconChevronDown-WO0F_wCN.js";import"./IconChevronUp-Bnc8nPwt.js";import"./IconChevronRight-BNxuJPqd.js";import"./AvatarGroup-89Yt5Pqa.js";import"./DropzoneFileUpload-R427p9Li.js";import"./Label-F-T65YLK.js";import"./useFormProps-CFDxfgKv.js";import"./ErrorMessage-D3x06M_y.js";import"./IconDynamicComponent-DLfUOzMP.js";import"./Snackbar-Cu-vbDAs.js";import"./Alert-fCJjPVwg.js";import"./IconDismissFilled-Ctj_33jn.js";import"./Progress-BDPo_k4G.js";import"./IconAdd-DenQjdbk.js";import"./Checkbox-DwCHHAG_.js";import"./IconInfo-CZOArMLj.js";import"./IconCheckmark-Bdswps9W.js";import"./Empty-DzkTsiHP.js";import"./Image-DofeXJcP.js";import"./Input-DixQOrQ7.js";import"./IconCheckmarkCircleFilled-Dgri_02z.js";import"./IconChevronLeft-bDBsCQDn.js";import"./IconCaretDownFilled-DgM6tNpo.js";import"./extends-CF3RwP-h.js";import"./Tab-BX90JPeD.js";import"./Badge-CmV1S3bZ.js";import"./IconMore-DudQr-KG.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
