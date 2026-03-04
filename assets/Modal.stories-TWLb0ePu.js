import{j as o}from"./jsx-runtime-B_KvGkvl.js";import{r as b}from"./iframe-D5psIR2j.js";import{M,a as f}from"./Popover-BLQy0uOY.js";import{a as x}from"./IconArrowDownloadFilled-Bsa16nhO.js";import{S as T}from"./index-TP-qv_jO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-SeRZCanj.js";import"./types-CWEngvRd.js";import"./helpers-DR0AIT_T.js";import"./IconDismiss-SfonZfrZ.js";import"./Tooltip-D9tmDtSL.js";import"./Text-BWATkKcH.js";import"./Button-B6l7szoO.js";import"./Link-Bfxw35Q_.js";import"./NestedMenu-Dtk99lUY.js";import"./index-C27Cok3R.js";import"./CollapseGroup-BmOjcway.js";import"./Divider-B3K75htE.js";import"./AnimatePresenceWrapper-BXSe0GdG.js";import"./IconChevronDown-bIW8t8fI.js";import"./IconChevronUp-Bdnnmoo8.js";import"./IconChevronRight-CqPh29EA.js";import"./AvatarGroup-CNKCzdwd.js";import"./DropzoneFileUpload-BN1FlKaZ.js";import"./Label-CJanzy0l.js";import"./useFormProps-rcwbPJ8V.js";import"./ErrorMessage-DMgiPsWg.js";import"./IconDynamicComponent-D1NB5x-a.js";import"./Snackbar-sZ4mN64Z.js";import"./Alert-Bd8NKon-.js";import"./IconDismissFilled-cpgvoD_-.js";import"./Progress-xAMX639z.js";import"./IconAdd-Cum6xqhF.js";import"./Checkbox-BANP1oD7.js";import"./IconInfo-uhsZKdbA.js";import"./IconCheckmark-gEJ3rdS7.js";import"./Empty-CNu5GiU9.js";import"./Image-jNehqfcV.js";import"./Input-BH49nG5m.js";import"./IconCheckmarkCircleFilled-Ctm_PamL.js";import"./IconChevronLeft-CHTFaXyy.js";import"./IconCaretDownFilled-BACMyA91.js";import"./extends-CF3RwP-h.js";import"./Tab-eLsKKkR_.js";import"./Badge-CiTFScQz.js";import"./IconMore-CsBmMbao.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
