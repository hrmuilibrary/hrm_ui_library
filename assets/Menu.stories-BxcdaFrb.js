import{j as e}from"./jsx-runtime-COAxsntk.js";import{r as i}from"./iframe-WcQ6Sl9H.js";import{M as C,N as I}from"./NestedMenu-BFwAQbjs.js";import{B as b}from"./Button-Bro-A3Bz.js";import{I as y}from"./IconArrowDownloadFilled-DVSmfn_y.js";import{I as g,a as h,b as x}from"./IconBeach-B9P03d5C.js";import{I as M}from"./IconMore-Yr9N-G3b.js";import{I as O}from"./IconCheckmark-BHE2PBQa.js";import{I as n}from"./IconSettings-nRjlV-we.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BTR943Pp.js";import"./index-D7yywZyn.js";import"./Text-7_luzw5h.js";import"./helpers-D6u27_vp.js";import"./index-DYDl_GcV.js";import"./types-B7UIVIgO.js";import"./Popover-C9LljIBw.js";import"./IconDismiss-x86Bmorf.js";import"./Link-DKpj_SJN.js";import"./index-prTvbJ1P.js";import"./CollapseGroup-DSVlF0zI.js";import"./Divider-aNhtQLFU.js";import"./AnimatePresenceWrapper-DsGyzjFk.js";import"./IconChevronDown-CpRZJ-YN.js";import"./IconChevronUp-D6SsiMYp.js";import"./IconChevronRight-DMJgShJ9.js";import"./AvatarGroup-ccfyJz3W.js";import"./DropzoneFileUpload-Cjqm2c_d.js";import"./Label-s8LSYXSm.js";import"./useFormProps-DQs_GDyV.js";import"./ErrorMessage-DUlTR1lI.js";import"./IconDynamicComponent-CzYt8ICE.js";import"./Snackbar-Crwj_qM0.js";import"./Alert-BmpVp-j9.js";import"./IconDismissFilled-hGcS_1cE.js";import"./Progress-DS7EvYLb.js";import"./IconAdd-BNe-y9Zr.js";import"./Checkbox-CgUegMDU.js";import"./IconInfo-C8wfuUp1.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
