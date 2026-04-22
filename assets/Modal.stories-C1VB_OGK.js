import{j as o}from"./jsx-runtime-3P3vag9i.js";import{r as b}from"./iframe-Cpsg4asw.js";import{M,a as f}from"./Popover-DymdWVru.js";import{a as x}from"./IconArrowDownloadFilled-CJccAXsT.js";import{S as T}from"./index-DGhNOfK3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-Ben75hYQ.js";import"./types-CbtXEBJj.js";import"./helpers-BRhFxdP-.js";import"./IconDismiss-CoWWE6Xd.js";import"./Tooltip-C_ZFxAPF.js";import"./Text-3bg6BdB8.js";import"./index-D5l1nwKk.js";import"./Button-DoN8yXVl.js";import"./Link-C8NSzvKS.js";import"./NestedMenu-Do_x0KyV.js";import"./CollapseGroup-BkumSN_f.js";import"./Divider-DzXlkHUu.js";import"./AnimatePresenceWrapper-CaBpg4mX.js";import"./IconChevronDown-DS0K6_rb.js";import"./IconChevronUp-B8l_6ewH.js";import"./IconChevronRight-BcqabUJS.js";import"./AvatarGroup-D2pFaS-1.js";import"./DropzoneFileUpload-DLXt9zvp.js";import"./Label-ChDFgmyM.js";import"./useFormProps-CTdDNdd0.js";import"./ErrorMessage-CzSWCZXu.js";import"./IconDynamicComponent-BbfTy0q9.js";import"./Snackbar-a7ROzi7O.js";import"./Alert-Cg9jg3TC.js";import"./IconDismissFilled-sy62c-BH.js";import"./Progress-Bznpz-6k.js";import"./IconAdd-BTr8eBAg.js";import"./Checkbox-BTk_gH3g.js";import"./IconInfo-Cfx0xM2A.js";import"./IconCheckmark-CHKHEumT.js";import"./Empty-CvN-v8wP.js";import"./Image-B0VnErpX.js";import"./Input-KFdyXeV7.js";import"./IconCheckmarkCircleFilled-BcVefn7g.js";import"./IconChevronLeft-BLeW5fPg.js";import"./IconCaretDownFilled-CbBA25Af.js";import"./extends-CF3RwP-h.js";import"./Tab-Cma-xAxA.js";import"./Badge-C8387PxE.js";import"./IconMore-DMp7LMJy.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
