import{j as e}from"./jsx-runtime-CUEpH-cN.js";import{r as i}from"./iframe-B2n-sonQ.js";import{M as C,N as I}from"./NestedMenu-CVF9crdv.js";import{B as b}from"./Button-D1JlRvo9.js";import{I as y}from"./IconArrowDownloadFilled-DvfmWR50.js";import{I as g,a as h,b as x}from"./IconBeach-CpsojbWn.js";import{I as M}from"./IconMore-L1l7o9bq.js";import{I as O}from"./IconCheckmark-I3lfR7nd.js";import{I as n}from"./IconSettings-Am4hu7F0.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Bbxxtat_.js";import"./index-uvotEDf1.js";import"./Text-CO7aP-6T.js";import"./helpers-DdXDXWzd.js";import"./index-DYDl_GcV.js";import"./types-DmqMf1oU.js";import"./Popover-C0wkIf_u.js";import"./IconDismiss-Cp7I9Va5.js";import"./Link-C_oqxTvj.js";import"./index-5DKENnEB.js";import"./CollapseGroup-DBt1Equd.js";import"./Divider-By2T9_jD.js";import"./AnimatePresenceWrapper-BKNeeFIU.js";import"./IconChevronDown-Skgbl1YX.js";import"./IconChevronUp-CwAe7ctP.js";import"./IconChevronRight-DURXy42u.js";import"./AvatarGroup-1YPzOgYf.js";import"./DropzoneFileUpload-_OQUe8xw.js";import"./Label-DuITUxwh.js";import"./useFormProps-DLl86Wi0.js";import"./ErrorMessage-BXGgzq4o.js";import"./IconDynamicComponent-CIxXHTc9.js";import"./Snackbar-B0zKic_U.js";import"./Alert-sGjrz9Ju.js";import"./IconDismissFilled-DdWK2zT3.js";import"./Progress-DLkD8uKX.js";import"./IconAdd-DkDM-AYE.js";import"./Checkbox-DK0FIsIJ.js";import"./IconInfo-IYVmM4Ss.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
