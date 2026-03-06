import{j as o}from"./jsx-runtime-BWL0Uqfu.js";import{r as b}from"./iframe-CxYI0EWd.js";import{M,a as f}from"./Popover-DYInKUEg.js";import{a as x}from"./IconArrowDownloadFilled-DeZuODZt.js";import{S as T}from"./index-udPrdk_p.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-Du6-9Mdg.js";import"./types-CyyjeX0T.js";import"./helpers-Me6vAPdm.js";import"./IconDismiss-C984OP64.js";import"./Tooltip-B02AfB-D.js";import"./Text-DbjSgsyH.js";import"./Button-DOL9xF0T.js";import"./Link-Bu32HQOo.js";import"./NestedMenu-CQ7tjaKa.js";import"./index-bcskSfJh.js";import"./CollapseGroup-Lk86UPmy.js";import"./Divider-svS-q4-b.js";import"./AnimatePresenceWrapper-60m3Q6fP.js";import"./IconChevronDown-C54M6bN4.js";import"./IconChevronUp-BVE_dipC.js";import"./IconChevronRight-DIaJwf70.js";import"./AvatarGroup-CzhZhSbF.js";import"./DropzoneFileUpload-DtCyyDe1.js";import"./Label-DIp6Fp5-.js";import"./useFormProps-vNmMLqJU.js";import"./ErrorMessage-ZSw-FjO6.js";import"./IconDynamicComponent-49CGwydg.js";import"./Snackbar-DUsYBUo-.js";import"./Alert-BwkFTUeF.js";import"./IconDismissFilled-BOZMYhUf.js";import"./Progress-NvIlLS7W.js";import"./IconAdd-B8_Fyla6.js";import"./Checkbox-DE_FgKiO.js";import"./IconInfo-_4ulWNhk.js";import"./IconCheckmark-QKjn9JJt.js";import"./Empty-rxTBj6y3.js";import"./Image-68Q2lsCm.js";import"./Input-BPVmjdAi.js";import"./IconCheckmarkCircleFilled-PEcPMxgt.js";import"./IconChevronLeft-DFeHXLyt.js";import"./IconCaretDownFilled-aDeUgKAx.js";import"./extends-CF3RwP-h.js";import"./Tab-BZHJ7ile.js";import"./Badge-WhTrbRlP.js";import"./IconMore-CwWsA6hY.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
