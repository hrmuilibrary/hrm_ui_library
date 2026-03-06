import{j as o}from"./jsx-runtime-COAxsntk.js";import{r as b}from"./iframe-WcQ6Sl9H.js";import{M,a as f}from"./Popover-C9LljIBw.js";import{a as x}from"./IconArrowDownloadFilled-DVSmfn_y.js";import{S as T}from"./index-DIKU8S0T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-D7yywZyn.js";import"./types-B7UIVIgO.js";import"./helpers-D6u27_vp.js";import"./IconDismiss-x86Bmorf.js";import"./Tooltip-BTR943Pp.js";import"./Text-7_luzw5h.js";import"./Button-Bro-A3Bz.js";import"./Link-DKpj_SJN.js";import"./NestedMenu-BFwAQbjs.js";import"./index-prTvbJ1P.js";import"./CollapseGroup-DSVlF0zI.js";import"./Divider-aNhtQLFU.js";import"./AnimatePresenceWrapper-DsGyzjFk.js";import"./IconChevronDown-CpRZJ-YN.js";import"./IconChevronUp-D6SsiMYp.js";import"./IconChevronRight-DMJgShJ9.js";import"./AvatarGroup-ccfyJz3W.js";import"./DropzoneFileUpload-Cjqm2c_d.js";import"./Label-s8LSYXSm.js";import"./useFormProps-DQs_GDyV.js";import"./ErrorMessage-DUlTR1lI.js";import"./IconDynamicComponent-CzYt8ICE.js";import"./Snackbar-Crwj_qM0.js";import"./Alert-BmpVp-j9.js";import"./IconDismissFilled-hGcS_1cE.js";import"./Progress-DS7EvYLb.js";import"./IconAdd-BNe-y9Zr.js";import"./Checkbox-CgUegMDU.js";import"./IconInfo-C8wfuUp1.js";import"./IconCheckmark-BHE2PBQa.js";import"./Empty-HbfgBTFV.js";import"./Image-Gd61BRNQ.js";import"./Input-Bp9oPFJ-.js";import"./IconCheckmarkCircleFilled-Bps_1oop.js";import"./IconChevronLeft-9Gu5j-qV.js";import"./IconCaretDownFilled-Bhy-MLJd.js";import"./extends-CF3RwP-h.js";import"./Tab-Dg6qvfns.js";import"./Badge-Bflnl2ux.js";import"./IconMore-Yr9N-G3b.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
