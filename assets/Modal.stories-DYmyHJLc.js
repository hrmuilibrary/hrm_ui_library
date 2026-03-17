import{j as o}from"./jsx-runtime-Dsfa1cy_.js";import{r as b}from"./iframe-Cu1ACcZ0.js";import{M,a as f}from"./Popover-4wwBX2nS.js";import{a as x}from"./IconArrowDownloadFilled-D9zHe4Ng.js";import{S as T}from"./index-sg_Alwgf.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-FM0QuzL8.js";import"./types-Bx1EyXuF.js";import"./helpers-DMMClaLv.js";import"./IconDismiss-BPLHkZLQ.js";import"./Tooltip-DevWO_X7.js";import"./Text-Bcy4m-cf.js";import"./Button-BIi5M3eE.js";import"./Link-Cu2lT_Pe.js";import"./NestedMenu-BOl1_F-L.js";import"./index-B--9zh3V.js";import"./CollapseGroup-DVMAVNnQ.js";import"./Divider-C2GFQ3Ns.js";import"./AnimatePresenceWrapper-Bp4_G_sF.js";import"./IconChevronDown-DrOhvkvm.js";import"./IconChevronUp-YlhwKZRh.js";import"./IconChevronRight-Dz34_apv.js";import"./AvatarGroup-CiIPJxX_.js";import"./DropzoneFileUpload-BixBG1qM.js";import"./Label-WICMGV8E.js";import"./useFormProps-BoJt_c__.js";import"./ErrorMessage-BPsIlmQu.js";import"./IconDynamicComponent-GKfg8g9N.js";import"./Snackbar-r6KvgWaG.js";import"./Alert-BLqwXpzE.js";import"./IconDismissFilled-dM2LBSTD.js";import"./Progress-B42gXeOw.js";import"./IconAdd-BY3ZQi1E.js";import"./Checkbox-Gt24n7Lq.js";import"./IconInfo-P8mEn3Q_.js";import"./IconCheckmark-BR7yBRgf.js";import"./Empty-CLoVmJys.js";import"./Image-DJjOOcMM.js";import"./Input-BJS4CIlT.js";import"./IconCheckmarkCircleFilled-B31lMx1M.js";import"./IconChevronLeft-aBAtHVmp.js";import"./IconCaretDownFilled-CEqdKapb.js";import"./extends-CF3RwP-h.js";import"./Tab-BwMSAoqI.js";import"./Badge-CV4b5015.js";import"./IconMore-BPzQMkc7.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
